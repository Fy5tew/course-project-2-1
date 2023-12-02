import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { guest } from './defaultUsers';


export type User = {
    name: string,
    avatar: string,
    email?: string,
    password?: string,
};


export type UserState = User & {
    isAuthorized: boolean,
};


const initialState: UserState = {
    ...guest,
    isAuthorized: false,
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorize: (state) => {
            state.isAuthorized = true;
        },
        setName: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.name = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.avatar = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.password = action.payload;
        },
    }
});


export const userReducer = userSlice.reducer;


export const userActions = {
    ...userSlice.actions,
    getUser: (state: RootState) => state.user,
    getAuthorized: (state: RootState) => state.user.isAuthorized,
    getName: (state: RootState) => state.user.name,
    getAvatar: (state: RootState) => state.user.avatar,
    getEmail: (state: RootState) => state.user.email,
    getPassword: (state: RootState) => state.user.password,
};
