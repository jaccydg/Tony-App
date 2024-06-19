/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import api from '../api/Api.ts';

const initialState = {
    stations: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setStations: (state, action) => {
            state.stations = action.payload;
        },
    },
});

export const {
    setStations,
} = homeSlice.actions;

export const loadStationMarkers = () => async (dispatch: Dispatch) => {
    const response = await api.getStations();
    dispatch(setStations(response.stations));
};

export default homeSlice.reducer;
