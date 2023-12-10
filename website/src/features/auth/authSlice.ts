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
    recentlyViewed: GameId[],
    library: GameId[],
    favorites: GameId[],
    cart: GameId[],
    wishlist: GameId[],
}


const initialState: AuthState = {
    isAuthorized: false,
    user: guest,
    recentlyViewed: [],
    library: [],
    favorites: [],
    cart: [],
    wishlist: [],
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
            state.recentlyViewed = [];
            state.library = [];
            state.favorites = [];
            state.cart = [];
            state.wishlist = [];
        },
        unauthorize: (state) => {
            state.isAuthorized = false;
            state.user = guest;
            state.recentlyViewed = [];
            state.library = [];
            state.favorites = [];
            state.cart = [];
            state.wishlist = [];
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
        pushRecentlyViewed: (state, action: PayloadAction<GameId>) => {
            state.recentlyViewed = state.recentlyViewed.filter(gameId => gameId !== action.payload);
            state.recentlyViewed.unshift(action.payload);
        },
        addToLibrary: (state, action: PayloadAction<GameId>) => {
            if (state.cart.includes(action.payload)) {
                state.cart = state.cart.filter(gameId => gameId !== action.payload);
            }
            if (state.wishlist.includes(action.payload)) {
                state.wishlist = state.wishlist.filter(gameId => gameId !== action.payload);
            }
            if (!state.library.includes(action.payload)) {
                state.library.push(action.payload);
            }
        },
        removeFromLibrary: (state, action: PayloadAction<GameId>) => {
            if (state.favorites.includes(action.payload)) {
                state.favorites = state.favorites.filter(gameId => gameId !== action.payload);
            }
            if (state.library.includes(action.payload)) {
                state.library = state.library.filter(gameId => gameId !== action.payload);
            }
        },
        addToFavorites: (state, action: PayloadAction<GameId>) => {
            if (!state.library.includes(action.payload)) {
                return;
            }
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<GameId>) => {
            if (state.favorites.includes(action.payload)) {
                state.favorites = state.favorites.filter(gameId => gameId !== action.payload);
            }
        },
        addToCart: (state, action: PayloadAction<GameId>) => {
            if (state.library.includes(action.payload)) {
                return;
            }
            if (!state.cart.includes(action.payload)) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<GameId>) => {
            if (state.cart.includes(action.payload)) {
                state.cart = state.cart.filter(gameId => gameId !== action.payload);
            }
        },
        addToWishlist: (state, action: PayloadAction<GameId>) => {
            if (state.library.includes(action.payload)) {
                return;
            }
            if (!state.wishlist.includes(action.payload)) {
                state.wishlist.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<GameId>) => {
            if (state.wishlist.includes(action.payload)) {
                state.wishlist = state.wishlist.filter(gameId => gameId !== action.payload);
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
    getRecentlyViewed: (state: RootState) => state.auth.recentlyViewed,
    getLibrary: (state: RootState) => state.auth.library,
    isInLibrary: (gameId: GameId) => (state: RootState) => state.auth.library.includes(gameId),
    getFavorites: (state: RootState) => state.auth.favorites,
    isInFavorites: (gameId: GameId) => (state: RootState) => state.auth.favorites.includes(gameId),
    getCart: (state: RootState) => state.auth.cart,
    isInCart: (gameId: GameId) => (state: RootState) => state.auth.cart.includes(gameId),
    getWishlist: (state: RootState) => state.auth.wishlist,
    isInWishlist: (gameId: GameId) => (state: RootState) => state.auth.wishlist.includes(gameId),
};
