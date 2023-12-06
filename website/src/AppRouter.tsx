import { Routes, Route, Navigate } from 'react-router-dom';

import { IndexPage } from './pages/IndexPage';
import { StorePage } from './pages/StorePage';
import { LibraryPage } from './pages/LibraryPage';
import { GamePage } from './pages/GamePage';
import { AccountPage } from './pages/AccountPage';
import { AccountEditPage } from './pages/AccountEditPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignOutPage } from './pages/SignOutPage';

import { NotFoundPage } from './pages/404NotFoundPage';


export function AppRouter() {
    return (
        <Routes>
            <Route
                index
                element={ <Navigate replace to='/home' /> }
            />
            <Route 
                path='home'
                element={ <IndexPage /> }
            />
            <Route 
                path='store' 
                element={ <StorePage /> } 
            />
            <Route 
                path='library' 
                element={ <LibraryPage /> } 
            />
            <Route 
                path='game'
                element={ <Navigate to='/store' /> } 
            />
            <Route 
                path='game/:gameId' 
                element={ <GamePage /> } 
            />
            <Route 
                path='account' 
                element={ <AccountPage /> } 
            />
            <Route 
                path='account/edit' 
                element={ <AccountEditPage /> } 
            />
            <Route 
                path='signin' 
                element={ <SignInPage /> } 
            />
            <Route 
                path='signup' 
                element={ <SignUpPage /> } 
            />
            <Route 
                path='signout' 
                element={ <SignOutPage /> } 
            />
            <Route 
                path='*'
                element={ <NotFoundPage /> }
            />
        </Routes>
    );
}
