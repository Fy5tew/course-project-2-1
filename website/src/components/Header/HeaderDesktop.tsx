import { AccountSmall } from '../AccountSmall';

import { Logo } from '../../elements/Logo';
import { PageNavigation } from '../../elements/PageNavigation';

import styles from './Header.module.scss';


export type HeaderDesktopProps = {
    isVisible: boolean,
}


export function HeaderDesktop({ isVisible }: HeaderDesktopProps) {
    return (
        <div className={styles.Header} data-visible={isVisible}>
            <Logo />
            <PageNavigation type='horizontal' showIcons={false} />
            <AccountSmall type='expandable' />
        </div>
    );
}
