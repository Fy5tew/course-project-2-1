import { configureStore } from '@reduxjs/toolkit';

import { titleReducer } from './title/titleSlice';
import { menuReducer } from './menu/menuSlice';


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        title: titleReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
