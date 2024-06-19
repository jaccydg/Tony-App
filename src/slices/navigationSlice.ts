/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navigate: {
        enabled: false,
        to: '',
    },
    navDrawerOpened: false,
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setNavigate: (state, action) => {
            state.navigate = {
                enabled: true,
                to: action.payload,
            };
        },
        unsetNavigate: (state) => {
            state.navigate = initialState.navigate;
        },
        toggleNavDrawer: (state) => {
            state.navDrawerOpened = !state.navDrawerOpened;
        },
    },
});

export const {
    setNavigate,
    unsetNavigate,
    toggleNavDrawer,
} = navigationSlice.actions;

export default navigationSlice.reducer;
