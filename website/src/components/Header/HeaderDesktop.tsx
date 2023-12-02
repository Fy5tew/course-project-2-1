import { Account } from '../Account';

import { Logo } from '../../elements/Logo';
import { PageNavigation } from '../../elements/PageNavigation';

import styles from './Header.module.scss';


export function HeaderDesktop() {
    return (
        <div className={styles.Header}>
            <Logo />
            <PageNavigation type='horizontal' />
            <Account type='expandable' />
        </div>
    );
}
