import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { guest } from './defaultUsers';


export type UserRegistration = {
    name: string,
    email: string,
    password: string,
};


export type UnauthorizedUser = {
    name: string,
    avatar: string,
    email: null,
    password: null;
};


export type AuthorizedUser = {
    name: string,
    avatar: string,
    email: string,
    password: string,
};


export type User = UnauthorizedUser | AuthorizedUser;


export type UserState = {
    isAuthorized: boolean,
    user: User,
}


const initialState: UserState = {
    isAuthorized: false,
    user: guest,
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorize: (state, action: PayloadAction<UserRegistration>) => {
            state.isAuthorized = true;
            state.user = {
                ...action.payload,
                avatar: 'default',
            };
        },
        unauthorize: (state) => {
            state.isAuthorized = false;
            state.user = guest;
        },
        setName: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.user.name = action.payload.slice(0, 15);
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.user.avatar = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.user.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            if (!state.isAuthorized) return;
            state.user.password = action.payload;
        },
    }
});


export const userReducer = userSlice.reducer;


export const userActions = {
    ...userSlice.actions,
    getState: (state: RootState) => state.user,
    getUser: (state: RootState) => state.user.user,
    getAuthorized: (state: RootState) => state.user.isAuthorized,
    getName: (state: RootState) => state.user.user.name,
    getAvatar: (state: RootState) => state.user.user.avatar,
    getEmail: (state: RootState) => state.user.user.email,
    getPassword: (state: RootState) => state.user.user.password,
};
