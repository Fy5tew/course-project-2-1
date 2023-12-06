import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';

import { PageLayout } from '../../components/PageLayout';
import { NotFoundPage } from '../404NotFoundPage';

import styles from './GamePage.module.scss';


declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}


export function GamePage() {
    const { gameId } = useParams();
    const game = useSelector(gamesActions.getGameById(gameId as string));
    const currentSliderIndex = useState(0);

    useTitle(game?.title);

    if (!game) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <PageLayout>
            <div className={styles.GamePage}>
                <div className={styles.Cover}>
                    <img className={styles.CoverImage} src={game.media.cover} alt='' />
                    <div className={styles.CoverFilter}></div>
                </div>
                <div className={styles.Head}>
                    <img className={styles.Poster} src={game.media.poster} alt='' />
                    <div className={styles.GameInfo}>
                        <h1 className={styles.Title}>{game.title}</h1>
                        <div className={styles.Info}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Дата выхода</th>
                                        <td>{game.releaseDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Жанр</th>
                                        <td>{game.genres.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Возрастной рейтинг</th>
                                        <td>{game.ageLimit || 'Нет'}</td>
                                    </tr>
                                    <tr>
                                        <th>Оценка на Metacritic</th>
                                        <td>{game.metacriticScore}</td>
                                    </tr>
                                    <tr>
                                        <th>Разработчик</th>
                                        <td>{game.developers.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Издатель</th>
                                        <td>{game.publishers.join(', ')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={styles.Description}>
                    <h2>Об игре</h2>
                    <p>{game.description}</p>
                </div>
                <div className={styles.Screenshots}>
                    <h2>Изображения из игры</h2>
                    <Carousel 
                        className={styles.Carousel} 
                        showArrows={true}
                        statusFormatter={(current, total) => `${current}/${total}`}
                    >
                        {game.media.screenshots.map(screenshot => (
                            <img src={screenshot} alt='' />
                        ))}
                    </Carousel>
                </div>
            </div>
        </PageLayout>
    );
}
