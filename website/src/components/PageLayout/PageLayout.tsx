import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useOnScroll } from '../../hooks/useScroll';

import { headerActions } from '../../features/header/headerSlice';

import { SidebarMenu } from '../SidebarMenu';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './PageLayout.module.scss';


export type PageLayoutProps = {
    children: React.ReactNode,
} 


export function PageLayout({ children } : PageLayoutProps) {
    const dispatch = useDispatch();
    const isHeaderVisible = useSelector(headerActions.getVisible);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useOnScroll(containerRef, (direction) => {
        if (direction === 'down' && isHeaderVisible) {
            dispatch(headerActions.hide());
        }
    }, 70);

    useOnScroll(containerRef, (direction) => {
        if (direction === 'up' && !isHeaderVisible) {
            dispatch(headerActions.show());
        }
    }, 30);

    return (
        <div className={styles.PageLayout}>
            <Header />
            <div className={styles.PageContainer} ref={containerRef}>
                <div className={styles.PageContent}>
                    { children }
                </div>
                <Footer />
            </div>
            <SidebarMenu />
        </div>
    );
}
