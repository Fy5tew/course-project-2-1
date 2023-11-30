import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TitleContextProvider } from './contexts/TitleContext';
import { MenuContextProvider } from './contexts/MenuContext';

import { IndexPage } from './pages/IndexPage';
import { StorePage } from './pages/StorePage';
import { LibraryPage } from './pages/LibraryPage';

import './index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TitleContextProvider>
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={ <IndexPage /> }/>
            <Route path='store' element={ <StorePage /> } />
            <Route path='library' element={ <LibraryPage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
    </TitleContextProvider>
  </React.StrictMode>
);
