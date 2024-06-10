/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import api from '../api/Api';

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

export const loadStationMarkers = () => async (dispatch) => {
    const response = await api.getStations();
    dispatch(setStations(response.stations));
};

export default homeSlice.reducer;
