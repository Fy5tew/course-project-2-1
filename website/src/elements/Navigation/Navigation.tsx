import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';


export type LinkData = {
    text: string,
    path: string,
};


export type LinksData = LinkData[];


export type NavigationProps = {
    type: 'horizontal' | 'vertical',
    data: LinksData,
};


export function Navigation({ type, data }: NavigationProps) {
    const className = type === 'horizontal' 
                            ? styles.NavigationHorizontal
                            : styles.NavigationVertical
    ;
    return (
        <nav className={className}>
            <ul>
                {data.map((link) => (
                    <li key={link.path}><Link to={link.path}>{link.text}</Link></li>
                ))}
            </ul>
        </nav>
    );
}
