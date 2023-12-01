import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationType } from 'react-router-dom';

import { menuActions } from '../../features/menu/menuSlice';

import { MenuButton } from '../../elements/MenuButton';
import { Account } from '../../elements/Account';
import { Navigation } from '../../elements/Navigation';

import styles from './SidebarMenu.module.scss';


export function SidebarMenu() {
    const dispatch = useDispatch();
    const navigationType = useNavigationType();
    const isOpened = useSelector(menuActions.getOpened);

    useEffect(() => {
        dispatch(menuActions.close());
    }, [dispatch, navigationType]);

    return (
        <div className={styles.SidebarMenu} data-opened={isOpened}>
            <div className={styles.MenuContent}>
                <div className={styles.Header}>
                    <Account />
                    <MenuButton />
                </div>
                <Navigation type='vertical' />
            </div>
        </div>
    );
}
