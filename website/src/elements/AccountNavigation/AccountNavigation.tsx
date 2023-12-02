import { Navigation, NavigationProps, LinksData } from "../Navigation";


const UNAUTHORIZED_PAGES_LINKS: LinksData = [
    {
        text: 'Вход',
        path: '/signin',
        iconPath: '/icons/signin.svg',
    },
    {
        text: 'Регистрация',
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
