import { Navigation, NavigationProps, LinksData } from "../Navigation";


const UNAUTHORIZED_PAGES_LINKS: LinksData = [
    {
        text: 'Войти',
        path: '/signin',
        iconPath: '/icons/signin.svg',
    },
    {
        text: 'Создать аккаунт',
        path: '/signup',
        iconPath: '/icons/signup.svg',
    },
];

const AUTHORIZED_PAGES_LINKS: LinksData = [
    {
        text: 'Мой аккаунт',
        path: '/account',
        iconPath: '/icons/account.svg',
    },
    {
        text: 'Корзина',
        path: '/cart',
        iconPath: '/icons/bag.svg',
    },
    {
        text: 'Желаемое',
        path: '/wishlist',
        iconPath: '/icons/list.svg',
    },
    {
        text: 'Выйти',
        path: '/signout',
        iconPath: '/icons/signout.svg',
    },
];


export type AccountNavigationProps = Omit<NavigationProps, 'data'> & {
    isAuthorized: boolean;
};


export function AccountNavigation({isAuthorized, ...props}: AccountNavigationProps) {
    return (
        <Navigation 
            {...props}
            data={isAuthorized ? AUTHORIZED_PAGES_LINKS : UNAUTHORIZED_PAGES_LINKS}
        />
    );
}
