import React from 'react';

import { SidebarMenu } from '../SidebarMenu';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './PageLayout.module.scss';


export type PageLayoutProps = {
    children: React.ReactNode,
} 


export function PageLayout({ children } : PageLayoutProps) {
    return (
        <div className={styles.PageLayout}>
            <Header />
            <div className={styles.PageContent}>
                { children }
            </div>
            <Footer />
            <SidebarMenu />
        </div>
    );
}
