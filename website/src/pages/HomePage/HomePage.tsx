import { useSelector } from 'react-redux/es/hooks/useSelector';

import { Link } from 'react-router-dom';

import { useTitle } from '../../hooks/useTitle';

import { gamesActions } from '../../features/games/gamesSlice';
import { authActions } from '../../features/auth/authSlice';

import { PageLayout } from '../../components/PageLayout';
import { GameList } from '../../elements/GameList';

import styles from './HomePage.module.scss';


const LINKS = [
    {
        to: '/store',
        text: 'Магазин',
        icon: '/icons/store.svg',
    },
    {
        to: '/library',
        text: 'Библиотека',
        icon: '/icons/library.svg',
    },
    {
        to: '/wishlist',
        text: 'Желаемое',
        icon: '/icons/list.svg',
    },
    {
        to: '/cart',
        text: 'Корзина',
        icon: '/icons/bag.svg',
    },
    {
        to: '/account',
        text: 'Профиль',
        icon: '/icons/account.svg',
    },
];


export function HomePage() {
    useTitle('Главная');

    const games = useSelector(gamesActions.getAllGames);
    const recentlyViewed = useSelector(authActions.getRecentlyViewed);
    const isAuthorized = useSelector(authActions.getAuthorized);
    const { name: userName } = useSelector(authActions.getUser);

    const recentlyViewedGames = (
        games
            .filter(game => recentlyViewed.includes(game.id))
            .sort((a, b) => {
                if (recentlyViewed.indexOf(a.id) > recentlyViewed.indexOf(b.id)) {
                    return 1;
                }
                if (recentlyViewed.indexOf(a.id) < recentlyViewed.indexOf(b.id)) {
                    return -1;
                }
                return 0;
            })
            .slice(0, 4)
    );
    const popularGames = [...games].sort((a, b) => {
        if (a.metacriticScore > b.metacriticScore) {
            return -1;
        }
        if (a.metacriticScore < b.metacriticScore) {
            return 1;
        }
        return 0;
    }).slice(0, 4);
    
    return (
        <PageLayout>
            <div className={styles.HomePage}>
                <h1>
                    Добро пожаловать
                    {isAuthorized ? <>, <span className={styles.UserName}>{userName}</span></> : <></>}
                </h1>
                <div className={styles.SectionsLinks}>
                    {LINKS.map(link => (
                        <Link to={link.to} key={link.to}>
                            <img src={link.icon} alt='' />
                            {link.text}
                        </Link>
                    ))}
                </div>
                <h2>
                    <span>Популярные игры</span>
                    <Link to='/store'>Все игры</Link>
                </h2>
                <GameList games={popularGames} showAgeLimit showMetacriticScore showPrice />
                <h2>
                    <span>Недавно просмотренные</span>
                </h2>
                <GameList games={recentlyViewedGames} showAgeLimit showMetacriticScore showPrice />
            </div>
        </PageLayout>
    );
}
