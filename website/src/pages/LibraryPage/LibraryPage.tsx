import { useSelector } from 'react-redux';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';


export function LibraryPage() {
    useTitle('Библиотека');

    const games = useSelector(gamesActions.getAllGames);
    const library = useSelector(authActions.getLibrary);

    return (
        <PageLayout>
            <h1>Ваши игры</h1>
            <GameList games={games.filter(game => library.includes(game.id))} />
        </PageLayout>
    );
}
