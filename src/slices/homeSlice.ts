/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import api from '../api/Api.ts';

const initialState = {
    gateway: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setGateways: (state, action) => {
            state.gateway = action.payload;
        },
    },
});

export const {
    setGateways,
} = homeSlice.actions;

export const loadGatewayMarkers = () => async (dispatch: Dispatch) => {
    const response = await api.getGateways();
    dispatch(setGateways(response));
};

export default homeSlice.reducer;
