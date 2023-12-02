import { configureStore } from '@reduxjs/toolkit';

import { titleReducer } from './title/titleSlice';
import { menuReducer } from './menu/menuSlice';
import { avatarsReducer } from './avatars/avatarsSlice';


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        title: titleReducer,
        avatars: avatarsReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
