/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import api from '../api/Api.ts';
import { getAuthToken, setAuthToken } from '../helpers/AuthHelper.ts';
// eslint-disable-next-line import/no-cycle
import { resetAppState } from './resetSlice.ts';
import { loadStationMarkers } from './homeSlice.ts';

const initialState = {
    fulfilled: false,
    cookieCheckEnabled: true,
    isUserAuthenticated: false,
    initDataFulfilled: false,
    userData: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: () => initialState,
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setIsUserAuthenticated: (state) => {
            state.fulfilled = true;
            state.isUserAuthenticated = true;
        },
        unsetIsUserAuthenticated: (state) => {
            state.fulfilled = true;
            state.isUserAuthenticated = false;
        },
        setInitDataFullfilled: (state) => {
            state.initDataFulfilled = true;
        },
        setCookieCheckEnabled: (state) => {
            state.fulfilled = false;
            state.cookieCheckEnabled = true;
        },
        unsetCookieCheckEnabled: (state) => {
            state.cookieCheckEnabled = false;
        },
    },
});

export const {
    resetAuthState,
    setUserData,
    setIsUserAuthenticated,
    unsetIsUserAuthenticated,
    setInitDataFullfilled,
    setCookieCheckEnabled,
    unsetCookieCheckEnabled,
} = authSlice.actions;

export const fetchUserData = () => async (dispatch: Dispatch) => {
    const userData = await api.getUser();
    dispatch(setUserData(userData));
};

export const fetchInitData = () => async (dispatch: Dispatch) => {
    try {
        await Promise.all([
            dispatch(fetchUserData() as any),
            dispatch(loadStationMarkers() as any),
        ]);
        dispatch(setInitDataFullfilled());
    } catch { /* empty */ }
};

export const authCookieCheck = () => async (dispatch: Dispatch) => {
    dispatch(unsetCookieCheckEnabled());
    const authToken = getAuthToken();
    if (authToken) {
        dispatch(setIsUserAuthenticated());
        dispatch(fetchInitData() as any);
    } else {
        dispatch(unsetIsUserAuthenticated());
    }
};

export const login = (data: Tony.Auth.LoginData) => async (dispatch: Dispatch) => {
    const token = await api.login(data);
    setAuthToken(token);
    setTimeout(() => dispatch(setCookieCheckEnabled()), 300);
};

export const logout = () => async () => {
    try {
        await api.logout();
    } catch { /* empty */ }
    resetAppState();
};

export default authSlice.reducer;
