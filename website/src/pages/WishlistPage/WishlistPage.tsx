import { useSelector } from "react-redux";

import { useTitle } from "../../hooks/useTitle";

import { gamesActions } from "../../features/games/gamesSlice";
import { authActions } from "../../features/auth/authSlice";

import { PageLayout } from "../../components/PageLayout";
import { GameList } from "../../elements/GameList";

import { Alert } from "../../elements/Alert";
import { Link } from "react-router-dom";


export function WishlistPage() {
    useTitle('Список желаемого');

    const games = useSelector(gamesActions.getAllGames);
    const wishlist = useSelector(authActions.getWishlist);

    const filteredGames = games.filter(game => wishlist.includes(game.id));

    return (
        <PageLayout auth='auth'>
            <h1>Список желаемого</h1>
            {filteredGames.length
                ? (
                    <GameList games={filteredGames} showPrice showAgeLimit showMetacriticScore />
                )
                : (
                    <>
                        <Alert icon='/icons/alert-circle.svg'>
                            Список желаемого пуст
                        </Alert>
                        <Alert icon='/icons/help-circle.svg'>
                            Добавить игры в список желаемого можно в <Link to='/store'>магазине</Link>
                        </Alert>
                    </>
                )
            }
        </PageLayout>
    );
}
