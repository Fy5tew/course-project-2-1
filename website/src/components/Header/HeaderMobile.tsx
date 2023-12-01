import { useWindowSize } from 'usehooks-ts';

import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';

import styles from './Header.module.scss';


const BREAKPOINT_WIDTH = 290;


export function HeaderMobile() {
    const { width } = useWindowSize();

    return (
        <div className={styles.Header}>
            <Logo short={width < BREAKPOINT_WIDTH} />
            <MenuButton />
        </div>
    );
}
