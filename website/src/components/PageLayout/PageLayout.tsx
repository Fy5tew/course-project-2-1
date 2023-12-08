import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffectOnce } from 'usehooks-ts';
import { Link } from 'react-router-dom';

import { useOnScroll } from '../../hooks/useScroll';

import { headerActions } from '../../features/header/headerSlice';
import { authActions } from '../../features/auth/authSlice';

import { SidebarMenu } from '../SidebarMenu';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './PageLayout.module.scss';


export type PageLayoutProps = {
    auth?: 'auth' | 'guest',
    children: React.ReactNode,
} 


export function PageLayout({ auth, children } : PageLayoutProps) {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(authActions.getAuthorized);
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

    useEffectOnce(() => {
        if (!isHeaderVisible) {
            dispatch(headerActions.show());
        }
    });

    let content;
    if (!auth) {
        content = children;
    }
    else if (auth === 'auth') {
        content = isAuthorized ? children : <AuthOnly />;
    }
    else if (auth === 'guest') {
        content = !isAuthorized ? children : <GuestOnly />;
    }

    return (
        <div className={styles.PageLayout}>
            <Header />
            <div className={styles.PageContainer} ref={containerRef}>
                <div className={styles.PageContent}>
                    { content }
                </div>
                <Footer />
            </div>
            <SidebarMenu />
        </div>
    );
}


function AuthOnly() {
    return (
        <div className={styles.AuthError}>
            <h1>Ошибка доступа</h1>
            <h3>
                <Link to='/signin'>Войдите</Link> или <Link to='/signup'>зарегистрируйтесь</Link>, чтобы получить доступ к этой странице.
            </h3>
        </div>
    );
}


function GuestOnly() {
    return (
        <div className={styles.AuthError}>
            <h1>Ошибка доступа</h1>
            <h3>
                Данная страница недоступна авторизованным пользователям. <Link to='/signout'>Выйдите</Link>, чтобы получить доступ к этой странице.
            </h3>
        </div>
    );
}
