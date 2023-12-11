import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { Game } from '../../features/games/gamesSlice';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import { Alert } from '../../elements/Alert';

import styles from './CartPage.module.scss';


export function CartPage() {
    useTitle('Корзина');

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const games = useSelector(gamesActions.getAllGames);
    const cart = useSelector(authActions.getCart);

    const filteredGames = games.filter(game => cart.includes(game.id)).sort((a, b) => {
        if (a.price < b.price) {
            return 1;
        }
        if (a.price > b.price) {
            return -1;
        }
        return 0;
    });

    const totalPrice = Math.round(
        filteredGames
            .map(game => game.price)
            .reduce((prev, current) => prev + current, 0) * 100,
    ) / 100;
    const taxPrice = Math.round(totalPrice * 0.05 * 100) / 100;
    const finalPrice = Math.round((totalPrice + taxPrice) * 100) / 100;

    if (!filteredGames.length) {
        return (
            <PageLayout auth='auth'>
                <h1>Корзина</h1>
                <Alert icon='/icons/alert-circle.svg'>
                    Корзина пуста
                </Alert>
                <Alert icon='/icons/help-circle.svg'>
                    Добавить игры в корзину можно в <Link to='/store'>магазине</Link>
                </Alert>
            </PageLayout>
        );
    }

    const buyButtonClickHandler = () => {
        filteredGames.forEach(game => dispatch(authActions.addToLibrary(game.id)));
        enqueueSnackbar<'success'>('Игры добавлены в вашу библиотеку', {
            variant: 'success',
        });
    };

    const clearCartButtonClickHandler = () => {
        filteredGames.forEach(game => dispatch(authActions.removeFromCart(game.id)));
        enqueueSnackbar<'error'>('Корзина очищена', {
            variant: 'error',
        });
    };

    const removeButtonClickHandler = (game: Game) => () => {
        dispatch(authActions.removeFromCart(game.id));
        enqueueSnackbar<'error'>(`«${game.title}» удалена из корзины`, {
            variant: 'error',
        });
    };

    const RemoveButton = ({game}: {game: Game}) => (
        <img 
            className={styles.RemoveButton}
            onClick={removeButtonClickHandler(game)}
            src='/icons/cross-circle-red.svg' 
            alt=''
        />
    );

    return (
        <PageLayout auth='auth'>
            <div className={styles.Cart}>
                <div className={styles.Games}>
                    <h2>Товары в корзине ({filteredGames.length})</h2>
                    <GameList games={filteredGames} ActionButton={RemoveButton} showPrice showMetacriticScore />
                </div>
                <div className={styles.Sidebar}>
                    <h2>Описание заказа</h2>
                    <ul>
                        <li>
                            <span className={styles.Title}>Количество товаров</span>
                            <span>{filteredGames.length}</span>
                        </li>
                        <li>
                            <span className={styles.Title}>Цена</span>
                            <span>0</span>
                        </li>
                        {filteredGames.map((game) => (
                            <li key={game.id}>
                                <div className={styles.Separator}></div>
                                <span>+ ${game.price}</span>
                            </li>
                        ))}
                        <li>
                            <span className={styles.Title}>Суммарно</span>
                            <span>${totalPrice}</span>
                        </li>
                        <li>
                            <span className={styles.Title}>Налог (5%)</span>
                            <span>+ ${taxPrice}</span>
                        </li>
                        <li>
                            <span className={styles.Title}>Итого</span>
                            <span className={styles.FinalPrice}>${finalPrice}</span>
                        </li>
                    </ul>
                    <div className={styles.Controls}>
                        <button className={styles.BuyButton} onClick={buyButtonClickHandler}>
                            <img src='/icons/card.svg' alt='' />
                            Оплатить заказ
                        </button>
                        <button className={styles.ClearCartButton} onClick={clearCartButtonClickHandler}>
                            <img src='/icons/cross-circle-red.svg' alt='' />
                            Очистить корзину
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
