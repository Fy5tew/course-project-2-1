import { Navigation, NavigationProps, LinksData } from "../Navigation";


const PAGES_LINKS: LinksData = [
    {
        text: 'Вход',
        path: '/signin',
    },
    {
        text: 'Регистрация',
        path: '/signup',
    },
];


export type AccountNavigationProps = Omit<NavigationProps, 'data'>;


export function AccountNavigation(props: AccountNavigationProps) {
    return (
        <Navigation {...props} data={PAGES_LINKS} />
    );
}
