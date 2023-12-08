import { combineReducers } from '@reduxjs/toolkit';

import { titleReducer } from './title/titleSlice';
import { headerReducer } from './header/headerSlice';
import { menuReducer } from './menu/menuSlice';
import { avatarsReducer } from './avatars/avatarsSlice';
import { gamesReducer } from './games/gamesSlice';
import { userReducer } from './user/userSlice';


export const rootReducer = combineReducers({
    title: titleReducer,
    header: headerReducer,
    menu: menuReducer,
    avatars: avatarsReducer,
    games: gamesReducer,
    user: userReducer,
});
