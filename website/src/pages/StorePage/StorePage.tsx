import { useSelector } from 'react-redux';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';

import { PageLayout } from '../../components/PageLayout';

import { GameList } from '../../elements/GameList';


export function StorePage() {
    useTitle('Магазин');
    const games = useSelector(gamesActions.getAllGames);

    return (
        <PageLayout>
            <h1>Магазин</h1>
            <GameList games={games} showPrice showAgeLimit showMetacriticScore />
        </PageLayout>
    );
}
