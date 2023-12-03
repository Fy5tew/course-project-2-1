import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationType } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { menuActions } from '../../features/menu/menuSlice';

import { AccountSmall } from '../AccountSmall';

import { Logo } from '../../elements/Logo';
import { MenuButton } from '../../elements/MenuButton';
import { PageNavigation } from '../../elements/PageNavigation';

import styles from './SidebarMenu.module.scss';


const BREAKPOINT_WIDTH = 375;


export function SidebarMenu() {
    const dispatch = useDispatch();
    const navigationType = useNavigationType();
    const { width } = useWindowSize();
    const isOpened = useSelector(menuActions.getOpened);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpened) {
            const timeout = setTimeout(() => {
                menuContentRef.current?.scroll(0, 0);
            }, 500);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [isOpened]);

    useEffect(() => {
        dispatch(menuActions.close());
    }, [dispatch, navigationType]);

    useOnClickOutside(menuRef, () => {
        dispatch(menuActions.close());
    });

    return (
        <div className={styles.SidebarMenu} data-opened={isOpened} ref={menuRef}>
            <div className={styles.Header}>
                <Logo short={width <= BREAKPOINT_WIDTH} />
                <MenuButton />
            </div>
            <div className={styles.Content} ref={menuContentRef}>
                <AccountSmall 
                    type='expanded' 
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
