import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { games } from './gamesData';


export type Game = {
    id: string,
    title: string,
    price: number,
    releaseDate: string,
    ageLimit: string,
    description: string,
    genres: string[],
    developers: string[],
    publishers: string[],
    metacriticScore: number,
    media: {
        poster: string,
        cover: string,
        screenshots: string[],
    },
};


export type GamesState = Game[];


const initialState: GamesState = games.sort((a, b) => {
    if (a.title < b.title) {
        return -1;
    }
    if (b.title > a.title) {
        return 1;
    }
    return 0;
});


export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {

    },
});


export const gamesReducer = gamesSlice.reducer;


export const gamesActions = {
    ...gamesSlice.actions,
    getAllGames: (state: RootState) => state.games,
    getAllGenres: (state: RootState) => {
        return state.games.map(game => game.genres).flat()
        .filter((value, index, array) => array.indexOf(value) === index);
    },
    getAllDevelopers: (state: RootState) => {
        return state.games.map(game => game.developers).flat()
        .filter((value, index, array) => array.indexOf(value) === index);
    },
    getAllPublishers: (state: RootState) => {
        return state.games.map(game => game.publishers).flat()
        .filter((value, index, array) => array.indexOf(value) === index);
    },
    getGameById: (id: string) => (state: RootState) => state.games.find(game => game.id === id) ?? null,
};
