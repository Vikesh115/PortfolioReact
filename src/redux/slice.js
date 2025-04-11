import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggletheme: (state)=>{
            state.theme = 'dark'
        }
    }
})

export const {toggletheme} = themeSlice.actions;

export default themeSlice.reducer;