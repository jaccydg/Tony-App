/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { deleteAuthToken } from '../helpers/AuthHelper';
// eslint-disable-next-line import/no-cycle
import { resetAuthState } from './authSlice';
import { resetErrorPageState } from './errorSlice';

const initialState = {};

export const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {},
});

export const resetAppState = () => async (dispatch) => {
    deleteAuthToken();
    dispatch(resetAuthState());
    dispatch(resetErrorPageState());
};

export default resetSlice.reducer;
