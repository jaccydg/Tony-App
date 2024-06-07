/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    errorPage: {
        enabled: false,
        title: '',
        message: '',
    },
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        resetErrorPageState: () => initialState,
        setErrorPage: (state, action) => {
            state.errorPage = {
                enabled: true,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
        unsetErrorPage: (state) => {
            state.errorPage = initialState.errorPage;
        },
    },
});

export const {
    resetErrorPageState,
    setErrorPage,
    unsetErrorPage,
} = errorSlice.actions;

export default errorSlice.reducer;
