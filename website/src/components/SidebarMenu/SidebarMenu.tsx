import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationType } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';

import { menuActions } from '../../features/menu/menuSlice';

import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';
import { Account } from '../../elements/Account';
import { Navigation } from '../../elements/Navigation';

import styles from './SidebarMenu.module.scss';


const BREAKPOINT_WIDTH = 460;


export function SidebarMenu() {
    const dispatch = useDispatch();
    const navigationType = useNavigationType();
    const { width } = useWindowSize();
    const isOpened = useSelector(menuActions.getOpened);

    useEffect(() => {
        dispatch(menuActions.close());
    }, [dispatch, navigationType]);

    return (
        <div className={styles.SidebarMenu} data-opened={isOpened}>
            <div className={styles.MenuContent}>
                <div className={styles.Header}>
                    <Logo short={width < BREAKPOINT_WIDTH} />
                    <MenuButton />
                </div>
                <Account />
                <Navigation type='vertical' />
            </div>
        </div>
    );
}
