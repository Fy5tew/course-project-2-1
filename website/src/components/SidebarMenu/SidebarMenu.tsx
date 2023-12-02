import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationType } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';

import { menuActions } from '../../features/menu/menuSlice';

import { Account } from '../Account';

import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';
import { PageNavigation } from '../../elements/PageNavigation';

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
                <Account 
                    type='full' 
                    infoReversed={true}
                />
                <PageNavigation 
                    type='vertical' 
                    showIcons={true}
                />
            </div>
        </div>
    );
}
