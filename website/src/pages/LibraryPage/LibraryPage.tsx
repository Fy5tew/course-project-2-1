import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useEffectOnce } from 'usehooks-ts';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions, Game } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import { Alert } from '../../elements/Alert';

import styles from './LibraryPage.module.scss';


export function LibraryPage() {
    useTitle('Библиотека');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { viewType } = useParams();

    const allGames = useSelector(gamesActions.getAllGames);
    const library = useSelector(authActions.getLibrary);
    const favorites = useSelector(authActions.getFavorites);

    let filteredGames = allGames.filter(game => library.includes(game.id));

    if (viewType === 'fav') {
        filteredGames = filteredGames.filter(game => favorites.includes(game.id));
    }

    useEffectOnce(() => {
        if (!['all', 'fav'].includes(viewType || '')) {
            navigate('/library/all', {
                replace: true,
            });
        }
    });

    const updateFavorites = (game: Game) => (event: React.MouseEvent) => {
        event.stopPropagation();
        if (favorites.includes(game.id)) {
            dispatch(authActions.removeFromFavorites(game.id));
            enqueueSnackbar<'error'>(`«${game.title}» удалена из избранного`, {
                variant: 'error',
            });
        }
        else {
            dispatch(authActions.addToFavorites(game.id));
            enqueueSnackbar<'success'>(`«${game.title}» добавлена в избранное`, {
                variant: 'success',
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

    let content;
    if (filteredGames.length !== 0) {
        content = (
            <GameList games={filteredGames} ActionButton={LikeButton} />
        );
    }
    else {
        if (viewType === 'all') {
            content = (
                <>
                    <Alert icon='/icons/alert-circle.svg'>
                        Библиотека игр пуста
                    </Alert>
                    <Alert icon='/icons/help-circle.svg'>
                        Новые игры отобразятся здесь сразу после <Link to='/store'>покупки</Link>
                    </Alert>
                </>
            );
        }
        if (viewType === 'fav') {
            content = (
                <>
                    <Alert icon='/icons/alert-circle.svg'>
                        Список избранного пуст
                    </Alert>
                    <Alert icon='/icons/help-circle.svg'>
                        Отметье понравишиеся игры для быстрого перехода к ним
                    </Alert>
                </>
            );
        }
    }

    return (
        <PageLayout auth='auth'>
            <h1 className={styles.Head}>
                <span>Ваши игры</span>
                <div className={styles.CategoryChange}>
                    <Link
                        to='/library/all'
                        className={styles.ChangeButton}
                        data-selected={viewType === 'all'}
                    >
                        Все игры
                    </Link>
                    <Link 
                        to='/library/fav'
                        className={styles.ChangeButton}
                        data-selected={viewType === 'fav'}
                    >
                        Избранное
                    </Link>
                </div>
            </h1>
            { content }
        </PageLayout>
    );
}
