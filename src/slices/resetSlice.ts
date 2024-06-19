/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { deleteAuthToken } from '../helpers/AuthHelper.ts';
// eslint-disable-next-line import/no-cycle
import { resetAuthState } from './authSlice.ts';
import { resetErrorPageState } from './errorSlice.ts';

const initialState = {};

export const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {},
});

export const resetAppState = () => async (dispatch: Dispatch) => {
    deleteAuthToken();
    dispatch(resetAuthState());
    dispatch(resetErrorPageState());
};

export default resetSlice.reducer;
