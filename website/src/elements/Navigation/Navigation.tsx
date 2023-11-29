import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';


export type NavigationProps = {
    type: 'horizontal' | 'vertical',
};


export function Navigation({ type }: NavigationProps) {
    const className = type === 'horizontal' 
                            ? styles.NavigationHorizontal
                            : styles.NavigationVertical
    ;
    return (
        <nav className={className}>
            <ul>
                <li><Link to='/'>
                    Главная
                </Link></li>
                <li><Link to='/store'>
                    Магазин
                </Link></li>
                <li><Link to='/library'>
                    Библиотека
                </Link></li>
            </ul>
        </nav>
    );
}
