/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import api from '../api/Api';
import { getAuthToken, setAuthToken } from '../helpers/AuthHelper';
// eslint-disable-next-line import/no-cycle
import { resetAppState } from './resetSlice';
import { loadStationMarkers } from './homeSlice';

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

export const fetchUserData = () => async (dispatch) => {
    const userData = await api.getUser();
    dispatch(setUserData(userData));
};

export const fetchInitData = () => async (dispatch) => {
    try {
        await Promise.all([
            dispatch(fetchUserData()),
            dispatch(loadStationMarkers()),
        ]);
        dispatch(setInitDataFullfilled());
    } catch { /* empty */ }
};

export const authCookieCheck = () => async (dispatch) => {
    dispatch(unsetCookieCheckEnabled());
    const authToken = getAuthToken();
    if (authToken) {
        dispatch(setIsUserAuthenticated());
        await dispatch(fetchInitData());
    } else {
        dispatch(unsetIsUserAuthenticated());
    }
};

export const login = (loginData) => async (dispatch) => {
    const token = await api.login(loginData);
    setAuthToken(token);
    setTimeout(() => dispatch(setCookieCheckEnabled()), 300);
};

export const logout = () => async (dispatch) => {
    try {
        await api.logout();
    } catch { /* empty */ }
    dispatch(resetAppState());
};

export default authSlice.reducer;
