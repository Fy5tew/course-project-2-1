import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import { Link } from 'react-router-dom';

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
    const { enqueueSnackbar } = useSnackbar();

    const [viewType, setViewType] = useState<'all' | 'fav'>('all');
    const allGames = useSelector(gamesActions.getAllGames);
    const library = useSelector(authActions.getLibrary);
    const favorites = useSelector(authActions.getFavorites);

    let filteredGames = allGames.filter(game => library.includes(game.id));

    if (viewType === 'fav') {
        filteredGames = filteredGames.filter(game => favorites.includes(game.id));
    }

    const changeCategory = (category: 'all' | 'fav') => () => {
        setViewType(category);
    }

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
                    <span 
                        className={styles.ChangeButton} 
                        onClick={changeCategory('all')}
                        data-selected={viewType === 'all'}
                    >
                        Все игры
                    </span>
                    <span 
                        className={styles.ChangeButton}
                        onClick={changeCategory('fav')}
                        data-selected={viewType === 'fav'}
                    >
                        Избранное
                    </span>
                </div>
            </h1>
            { content }
        </PageLayout>
    );
}
