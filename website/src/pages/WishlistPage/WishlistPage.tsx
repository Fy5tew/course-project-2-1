import { useSelector } from "react-redux";

import { useTitle } from "../../hooks/useTitle";

import { gamesActions } from "../../features/games/gamesSlice";
import { authActions } from "../../features/auth/authSlice";

import { PageLayout } from "../../components/PageLayout";
import { GameList } from "../../elements/GameList";


export function WishlistPage() {
    useTitle('Список желаемого');

    const games = useSelector(gamesActions.getAllGames);
    const wishlist = useSelector(authActions.getWishlist);

    return (
        <PageLayout auth='auth'>
            <h1>Список желаемого</h1>
            <GameList games={games.filter(game => wishlist.includes(game.id))} />
        </PageLayout>
    );
}
