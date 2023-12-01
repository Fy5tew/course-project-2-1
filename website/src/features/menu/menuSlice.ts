import { createSlice } from "@reduxjs/toolkit";


export type MenuState = {
    isOpened: boolean,
};


const initialState: MenuState = {
    isOpened: false,
}


export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpened = true;
        },
        close: (state) => {
            state.isOpened = false;
        },
        toggle: (state) => {
            state.isOpened = !state.isOpened;
        }
    },
});


export const menuReducer =  menuSlice.reducer;


export const menuActions = menuSlice.actions;
