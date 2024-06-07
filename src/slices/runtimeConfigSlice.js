/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import api from '../api/Api';
import { setRuntimeConfig } from '../helpers/AppRuntimeConfig';
import { setErrorPage } from './errorSlice';

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

export const fetchAppRuntimeConfig = () => async (dispatch) => {
    try {
        const config = await api.getRuntimeConfigJsonFile();
        setRuntimeConfig(config);
        setTimeout(() => dispatch(setSuccess()), 300);
    } catch (err) {
        dispatch(setError());
        dispatch(setErrorPage({
            title: 'Errore configurazione runtime',
            message: err.message,
        }));
    }
};

export default runtimeConfigSlice.reducer;
