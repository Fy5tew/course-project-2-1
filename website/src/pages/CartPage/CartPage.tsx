import { useSelector } from 'react-redux';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import styles from './CartPage.module.scss';


export function CartPage() {
    useTitle('Корзина');

    const games = useSelector(gamesActions.getAllGames);
    const cart = useSelector(authActions.getCart);

    return (
        <PageLayout auth='auth'>
            <div className={styles.Cart}>
                <div className={styles.Games}>
                    <h2>Товары в корзине ({cart.length})</h2>
                    <GameList games={games.filter(game => cart.indexOf(game.id) !== -1)} />
                </div>
                <div className={styles.Sidebar}>
                    <h2>Описание заказа</h2>
                </div>
            </div>
        </PageLayout>
    );
}
