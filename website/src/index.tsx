import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './features/store';

import { IndexPage } from './pages/IndexPage';
import { StorePage } from './pages/StorePage';
import { LibraryPage } from './pages/LibraryPage';
import { AccountPage } from './pages/AccountPage';
import { AccountEditPage } from './pages/AccountEditPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignOutPage } from './pages/SignOutPage';

import './index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route 
                index 
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
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
