/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backdropEnabled: false,
};

export const backdropSlice = createSlice({
    name: 'backdrop',
    initialState,
    reducers: {
        setBackdrop: (state) => {
            state.backdropEnabled = true;
        },
        unsetBackdrop: (state) => {
            state.backdropEnabled = false;
        },
    },
});

export const { setBackdrop, unsetBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
