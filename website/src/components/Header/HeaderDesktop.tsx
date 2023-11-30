import { Logo } from '../../elements/Logo';
import { Navigation } from '../../elements/Navigation';
import { Account } from '../../elements/Account';

import styles from './Header.module.scss';


export function HeaderDesktop() {
    return (
        <div className={styles.Header}>
            <Logo />
            <Navigation type='horizontal' />
            <Account />
        </div>
    );
}
