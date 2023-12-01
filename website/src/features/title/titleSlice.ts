import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store';


export type TitleState = {
    originalTitle: string,
    currentTitle: string,
};


const initialState: TitleState = {
    originalTitle: document.title,
    currentTitle: document.title,
};


const setDocumentTitle = (newTitle: string) => document.title = newTitle;


export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        reset: (state) => {
            state.currentTitle = state.originalTitle;
            setDocumentTitle(state.originalTitle);
        },
        setFull: (state, action: PayloadAction<string>) => {
            state.currentTitle = action.payload;
            setDocumentTitle(action.payload);
        },
        setPartial: (state, action: PayloadAction<string>) => {
            let newTitle = '';
            if (!action.payload) {
                newTitle = state.originalTitle;
            }
            else if (!state.originalTitle) {
                newTitle = action.payload
            }
            else {
                newTitle = `${action.payload} | ${state.originalTitle}`;
            }
            state.currentTitle = newTitle;
            setDocumentTitle(newTitle);
        },
    },
});


export const titleReducer = titleSlice.reducer;


export const titleActions = {
    ...titleSlice.actions,
    getState: (state: RootState) => state.title,
    getOriginal: (state: RootState) => state.title.originalTitle,
    getCurrent: (state: RootState) => state.title.currentTitle,
};
