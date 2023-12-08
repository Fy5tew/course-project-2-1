import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game } from '../games/gamesSlice';

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


type GameId = Game['id'];


export type AuthState = {
    isAuthorized: boolean,
    user: User,
    cart: GameId[],
}


const initialState: AuthState = {
    isAuthorized: false,
    user: guest,
    cart: [],
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize: (state, action: PayloadAction<UserRegistration>) => {
            state.isAuthorized = true;
            state.user = {
                ...action.payload,
                avatar: 'default',
            };
            state.cart = [];
        },
        unauthorize: (state) => {
            state.isAuthorized = false;
            state.user = guest;
            state.cart = [];
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
        addToCart: (state, action: PayloadAction<GameId>) => {
            if (state.cart.indexOf(action.payload) === -1) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<GameId>) => {
            if (state.cart.indexOf(action.payload) !== -1) {
                state.cart = state.cart.filter(gameId => gameId !== action.payload);
            }
        },
    }
});


export const authReducer = authSlice.reducer;


export const authActions = {
    ...authSlice.actions,
    getState: (state: RootState) => state.auth,
    getAuthorized: (state: RootState) => state.auth.isAuthorized,
    getUser: (state: RootState) => state.auth.user,
    getCart: (state: RootState) => state.auth.cart,
    isInCart: (gameId: GameId) => (state: RootState) => state.auth.cart.indexOf(gameId) !== -1,
};
