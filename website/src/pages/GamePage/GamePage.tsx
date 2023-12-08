import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useToggle } from 'usehooks-ts';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useTitle } from '../../hooks/useTitle';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { NotFoundPage } from '../404NotFoundPage';

import styles from './GamePage.module.scss';
import './Carousel.scss';


export function GamePage() {
    const dispatch = useDispatch();
    const { gameId } = useParams();
    const isAuthorized = useSelector(authActions.getAuthorized);
    const game = useSelector(gamesActions.getGameById(gameId as string));
    const isInCart = useSelector(authActions.isInCart(gameId as string));

    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const [isFullScreenSliderOpened, toggleFullScreenSlider] = useToggle(false);
    const fullScreenSliderRef = useRef(null);

    useTitle(game?.title);

    useOnClickOutside(fullScreenSliderRef, () => {
        if (isFullScreenSliderOpened) {
            toggleFullScreenSlider();
        }
    });

    if (!game) {
        return (
            <NotFoundPage />
        );
    }

    const cartButtonClickHandler = () => {
        if (isInCart) {
            dispatch(authActions.removeFromCart(gameId as string));
        }
        else {
            dispatch(authActions.addToCart(gameId as string));
        }
    }

    let controls;
    if (!isAuthorized) {
        controls = (
            <h3>
                <img src='/icons/alert-circle.svg' alt='' />
                <span>
                    <Link to='/signin'>Войдите</Link> или <Link to='/signup'>зарегистрируйтесь</Link>, чтобы иметь возможность купить игру или добавить её в список желаемого
                </span>
            </h3>
        )
    }
    else {
        controls = (
            <div className={styles.Controls}>
                <button
                    className={styles.BuyButton}
                >
                    <img src='/icons/card.svg' alt='' />
                    <span>Купить сейчас</span>
                </button>
                <button
                    className={isInCart ? styles.RemoveCartButton : styles.AddCartButton}
                    onClick={cartButtonClickHandler}
                >
                    <img 
                        src={isInCart ? '/icons/bag-remove-red.svg' : '/icons/bag-add-blue.svg'} 
                        alt='' 
                    />
                    {isInCart
                        ? <span>Убрать из корзины</span>
                        : <span>Добавить в корзину</span>
                    }
                </button>
                <button
                    className={styles.AddWishListButton}
                >
                    <img src='/icons/add-white.svg' alt='' />
                    <span>В список желаемого</span>
                </button>
            </div>
        )
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
                                        <td data-fake></td>
                                        <td>{game.releaseDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Жанр</th>
                                        <td data-fake></td>
                                        <td>{game.genres.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Возрастной рейтинг</th>
                                        <td data-fake></td>
                                        <td>{game.ageLimit || 'Нет'}</td>
                                    </tr>
                                    <tr>
                                        <th>Оценка на Metacritic</th>
                                        <td data-fake></td>
                                        <td>{game.metacriticScore}</td>
                                    </tr>
                                    <tr>
                                        <th>Разработчик</th>
                                        <td data-fake></td>
                                        <td>{game.developers.join(', ')}</td>
                                    </tr>
                                    <tr>
                                        <th>Издатель</th>
                                        <td data-fake></td>
                                        <td>{game.publishers.join(', ')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                { controls }
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
                        infiniteLoop={true}
                        swipeable={false}
                        selectedItem={currentSliderIndex}
                        onClickItem={() => toggleFullScreenSlider()}
                        onChange={index => setCurrentSliderIndex(index)}
                    >
                        {game.media.screenshots.map(screenshot => (
                            <img src={screenshot} alt='' key={screenshot} />
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className={styles.FullScreenSlider} data-opened={isFullScreenSliderOpened}>
                <div className={styles.Wrapper} ref={fullScreenSliderRef}>
                    <Carousel 
                        className={styles.Carousel} 
                        showArrows={true}
                        showThumbs={false}
                        dynamicHeight={true}
                        infiniteLoop={true}
                        swipeable={true}
                        statusFormatter={(current, total) => `${current}/${total}`}
                        selectedItem={currentSliderIndex}
                        onClickItem={() => toggleFullScreenSlider()}
                        onChange={index => setCurrentSliderIndex(index)}
                        
                    >
                        {game.media.screenshots.map(screenshot => (
                            <img src={screenshot} alt='' key={screenshot} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </PageLayout>
    );
}
