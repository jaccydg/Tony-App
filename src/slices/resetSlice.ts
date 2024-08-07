import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { deleteAuthToken, deleteRefreshToken } from '../helpers/AuthHelper.ts';
import { resetAuthState } from './authSlice.ts';

const initialState = {};

export const resetSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {},
});

export const resetAppState = () => async (dispatch: Dispatch) => {
    deleteAuthToken();
    deleteRefreshToken();
    dispatch(resetAuthState());
};

export default resetSlice.reducer;
