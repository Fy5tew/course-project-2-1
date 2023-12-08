import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import { Alert } from '../../elements/Alert';


export function LibraryPage() {
    useTitle('Библиотека');

    const allGames = useSelector(gamesActions.getAllGames);
    const library = useSelector(authActions.getLibrary);

    const filteredGames = allGames.filter(game => library.includes(game.id));

    return (
        <PageLayout auth='auth'>
            <h1>Ваши игры</h1>
            {filteredGames.length
                ? (
                    <GameList games={filteredGames} />
                )
                : (
                    <>
                        <Alert icon='/icons/alert-circle.svg'>
                            Библиотека игр пуста
                        </Alert>
                        <Alert icon='/icons/help-circle.svg'>
                            Новые игры отобразятся здесь сразу после <Link to='/store'>покупки</Link>
                        </Alert>
                    </>
                )
            }
        </PageLayout>
    );
}
