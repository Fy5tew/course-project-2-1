import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import { Link } from 'react-router-dom';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions, Game } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { AccountBig } from '../../components/AccountBig';
import { GameList } from '../../elements/GameList';

import styles from './AccountPage.module.scss';


export function AccountPage() {
    useTitle('Профиль');

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const games = useSelector(gamesActions.getAllGames);
    const favorites = useSelector(authActions.getFavorites);
    const library = useSelector(authActions.getLibrary);

    const libraryGames = (
        games
            .filter(game => library.includes(game.id) && !favorites.includes(game.id))
            .slice(0, 4)
    );
    const favoritesGames = (
        games
            .filter(game => favorites.includes(game.id))
            .slice(0, 4)
    );

    const updateFavorites = (game: Game) => (event: React.MouseEvent) => {
        event.stopPropagation();
        if (favorites.includes(game.id)) {
            dispatch(authActions.removeFromFavorites(game.id));
            enqueueSnackbar<'error'>(`«${game.title}» удалена из избранного`, {
                variant: 'error',
            });
        }
    }

    const LikeButton = ({ game }: {game: Game}) => (
        <img 
            className={styles.LikeButton}
            src={favorites.includes(game.id) ? '/icons/heart-red.svg' : '/icons/heart-outline-red.svg'}
            alt=''
            onClick={updateFavorites(game)}
        />
    );

    return (
        <PageLayout auth='auth'>
            <div className={styles.AccountPage}>
                <h1>Ваш профиль</h1>
                <div className={styles.AccountInfo}>
                    <AccountBig />
                    <div className={styles.GamesStats}>
                        <div className={styles.Stat}>
                            <span className={styles.Library}>{library.length}</span>
                            <h3>В библиотеке</h3>
                        </div>
                        <div className={styles.Stat}>
                            <span className={styles.Favorites}>{favorites.length}</span>
                            <h3>Любимых</h3>
                        </div>
                    </div>
                </div>
                <h2>
                    <span>Любимые игры</span>
                    <Link to='/library/fav'>Полный список</Link>
                </h2>
                <GameList games={favoritesGames} ActionButton={LikeButton} />
                <h2>
                    <span>Остальная библиотека</span>
                    <Link to='/library/all'>Полный список</Link>
                </h2>
                <GameList games={libraryGames} />
            </div>
        </PageLayout>
    );
}
