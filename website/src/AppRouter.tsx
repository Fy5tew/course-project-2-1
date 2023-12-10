import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';
import { GamePage } from './pages/GamePage';
import { LibraryPage } from './pages/LibraryPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
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
                element={ <HomePage /> }
            />
            <Route 
                path='store' 
                element={ <StorePage /> } 
            />
            <Route 
                path='library' 
                element={ <Navigate replace to='/library/all' /> } 
            />
            <Route 
                path='library/:viewType' 
                element={ <LibraryPage /> } 
            />
            <Route
                path='cart'
                element={ <CartPage /> }
            />
            <Route
                path='wishlist'
                element={ <WishlistPage /> }
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
