import { Navigation, NavigationProps, LinksData } from "../Navigation";


const PAGE_LINKS: LinksData = [
    {
        text: 'Главная',
        path: '/',
    },
    {
        text: 'Магазин',
        path: '/store',
    },
    {
        text: 'Библиотека',
        path: '/library',
    },
];


export type PageNavigationProps = Omit<NavigationProps, 'data'>;


export function PageNavigation(props: PageNavigationProps) {
    return (
        <Navigation {...props} data={PAGE_LINKS} />
    );
}
