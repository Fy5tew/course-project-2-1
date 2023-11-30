import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';

import styles from './Header.module.scss';


export function HeaderMobile() {
    return (
        <div className={styles.Header}>
            <Logo />
            <MenuButton />
        </div>
    );
}
