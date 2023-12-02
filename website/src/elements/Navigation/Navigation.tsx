import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';


export type LinkData = {
    text: string,
    path: string,
    iconPath?: string,
};


export type LinksData = LinkData[];


export type NavigationProps = {
    type: 'horizontal' | 'vertical',
    showIcons: boolean,
    data: LinksData,
};


export function Navigation({ type, showIcons, data }: NavigationProps) {
    const className = type === 'horizontal' 
                            ? styles.NavigationHorizontal
                            : styles.NavigationVertical
    ;
    return (
        <nav className={className}>
            <ul>
                {data.map((link) => (
                    <li key={link.path}>
                        {showIcons && link.iconPath && <img src={link.iconPath} alt='' />}
                        <Link to={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
