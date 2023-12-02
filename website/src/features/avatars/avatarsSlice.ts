import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { avatars } from './avatarsData';


export type Avatar = {
    type: 'man' | 'woman' | 'none' | 'special',
    name: string,
    src: string,
};


export type AvatarsState = Avatar[];


const initialState: AvatarsState = avatars;


export const avatarsSlice = createSlice({
    name: 'avatars',
    initialState,
    reducers: {

    },
});


export const avatarsReducer = avatarsSlice.reducer;


export const avatarsActions = {
    ...avatarsSlice.actions,
    getAvatars: (state: RootState) => state.avatars,
    getAvatar: (state: RootState, action: PayloadAction<string>) => {
        for (const avatar of state.avatars) {
            if (avatar.name === action.payload) {
                return avatar;
            }
        }
        return state.avatars[0];
    },
};
