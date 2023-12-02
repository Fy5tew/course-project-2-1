import { createSlice } from '@reduxjs/toolkit';

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
    getAvatar: (avatarName: string) => (state: RootState) => {
        for (const avatar of state.avatars) {
            if (avatar.name === avatarName) {
                return avatar;
            }
        }
        return state.avatars[0];
    },
};
