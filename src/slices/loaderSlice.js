/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getRuntimeConfig } from '../helpers/AppRuntimeConfig';

const initialState = {
    loaderEnabled: false,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoader: (state) => {
            state.loaderEnabled = true;
        },
        unsetLoader: (state) => {
            state.loaderEnabled = false;
        },
    },
});

export const { setLoader, unsetLoader } = loaderSlice.actions;

export const initialLoading = () => async (dispatch) => {
    dispatch(setLoader());
    setTimeout(() => {
        dispatch(unsetLoader());
    }, getRuntimeConfig().LOADER_TIME);
};

export default loaderSlice.reducer;
