import { useWindowSize } from 'usehooks-ts';

import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';

import styles from './Header.module.scss';


const BREAKPOINT_WIDTH = 290;


export type HeaderMobileProps = {
    isVisible: boolean,
}


export function HeaderMobile({ isVisible }: HeaderMobileProps) {
    const { width } = useWindowSize();

    return (
        <div className={styles.Header} data-visible={isVisible}>
            <Logo short={width < BREAKPOINT_WIDTH} />
            <MenuButton />
        </div>
    );
}
