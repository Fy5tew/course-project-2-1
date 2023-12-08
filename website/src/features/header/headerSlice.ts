import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";


export type HeaderState = {
    isVisible: boolean,
}


const initialState: HeaderState = {
    isVisible: true,
};


export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        show: (state) => {
            state.isVisible = true;
        },
        hide: (state) => {
            state.isVisible = false;
        },
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
});


export const headerReducer = headerSlice.reducer;


export const headerActions = {
    ...headerSlice.actions,
    getState: (state: RootState) => state.header,
    getVisible: (state: RootState) => state.header.isVisible,
};
