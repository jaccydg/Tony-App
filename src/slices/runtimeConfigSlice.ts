/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import api from '../api/Api.ts';
import { setRuntimeConfig } from '../helpers/AppRuntimeConfig.ts';
import { setErrorPage } from './errorSlice.ts';
import { setBackdrop, unsetBackdrop } from './backdropSlice.ts';

const initialState = {
    fulfilled: false,
    isError: false,
};

export const runtimeConfigSlice = createSlice({
    name: 'runtimeConfig',
    initialState,
    reducers: {
        setSuccess: (state) => {
            state.fulfilled = true;
            state.isError = false;
        },
        setError: (state) => {
            state.fulfilled = true;
            state.isError = true;
        },
    },
});

export const { setSuccess, setError } = runtimeConfigSlice.actions;

export const fetchAppRuntimeConfig = () => async (dispatch: Dispatch) => {
    dispatch(setBackdrop());
    try {
        const config = await api.getRuntimeConfigJsonFile();
        setRuntimeConfig(config);
        setTimeout(() => dispatch(setSuccess()), 300);
    } catch (err: any) {
        dispatch(setError());
        dispatch(setErrorPage({
            title: 'Errore configurazione runtime',
            message: err.message,
        }));
    }
    dispatch(unsetBackdrop());
};

export default runtimeConfigSlice.reducer;
