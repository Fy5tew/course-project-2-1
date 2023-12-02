import { Navigation, NavigationProps, LinksData } from "../Navigation";


const UNAUTHORIZED_PAGES_LINKS: LinksData = [
    {
        text: 'Вход',
        path: '/signin',
    },
    {
        text: 'Регистрация',
        path: '/signup',
    },
];

const AUTHORIZED_PAGES_LINKS: LinksData = [
    {
        text: 'Мой аккаунт',
        path: '/account',
    },
    {
        text: 'Выйти',
        path: '/signout',
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
