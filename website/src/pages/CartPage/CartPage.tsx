import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import { Alert } from '../../elements/Alert';

import styles from './CartPage.module.scss';


export function CartPage() {
    useTitle('Корзина');

    const games = useSelector(gamesActions.getAllGames);
    const cart = useSelector(authActions.getCart);

    const filteredGames = games.filter(game => cart.includes(game.id));

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

    return (
        <PageLayout auth='auth'>
            <div className={styles.Cart}>
                <div className={styles.Games}>
                    <h2>Товары в корзине ({cart.length})</h2>
                    <GameList games={filteredGames} showPrice showMetacriticScore />
                </div>
                <div className={styles.Sidebar}>
                    <h2>Описание заказа</h2>
                </div>
            </div>
        </PageLayout>
    );
}
