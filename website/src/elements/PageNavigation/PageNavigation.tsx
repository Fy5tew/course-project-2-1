import { Navigation, NavigationProps, LinksData } from "../Navigation";


const PAGE_LINKS: LinksData = [
    {
        text: 'Главная',
        path: '/home',
        iconPath: '/icons/home.svg',
    },
    {
        text: 'Магазин',
        path: '/store',
        iconPath: '/icons/store.svg',
    },
    {
        text: 'Библиотека',
        path: '/library',
        iconPath: '/icons/library.svg',
    },
];


export type PageNavigationProps = Omit<NavigationProps, 'data'>;


export function PageNavigation(props: PageNavigationProps) {
    return (
        <Navigation {...props} data={PAGE_LINKS} />
    );
}
