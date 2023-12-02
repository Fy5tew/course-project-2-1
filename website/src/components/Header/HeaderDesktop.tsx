import { Logo } from '../../elements/Logo';
import { PageNavigation } from '../../elements/PageNavigation';
import { Account } from '../../elements/Account';

import styles from './Header.module.scss';


export function HeaderDesktop() {
    return (
        <div className={styles.Header}>
            <Logo />
            <PageNavigation type='horizontal' />
            <Account />
        </div>
    );
}
