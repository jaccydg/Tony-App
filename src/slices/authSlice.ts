/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import api from '../api/Api.ts';
import { getAuthToken, setAuthToken, setRefreshRoken } from '../helpers/AuthHelper.ts';
// eslint-disable-next-line import/no-cycle
import { resetAppState } from './resetSlice.ts';
import { loadGatewayMarkers } from './homeSlice.ts';
import { setBackdrop, unsetBackdrop } from './backdropSlice.ts';

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
            dispatch(loadGatewayMarkers() as any),
        ]);
        dispatch(setInitDataFullfilled());
    } catch { /* empty */ }
};

export const authCookieCheck = () => async (dispatch: Dispatch) => {
    dispatch(setBackdrop());
    dispatch(unsetCookieCheckEnabled());
    const authToken = getAuthToken();
    if (authToken) {
        dispatch(setIsUserAuthenticated());
        dispatch(fetchInitData() as any);
    } else {
        dispatch(unsetIsUserAuthenticated());
    }
    dispatch(unsetBackdrop());
};

export const login = (data: Tony.Auth.LoginData) => async (dispatch: Dispatch) => {
    dispatch(setBackdrop());
    try {
        const response = await api.login(data);
        setAuthToken(response.accessToken, response.expiresIn);
        setRefreshRoken(response.refreshToken);
        setTimeout(() => dispatch(setCookieCheckEnabled()), 300);
        dispatch(unsetBackdrop());
        return true;
    } catch (err) {
        dispatch(unsetBackdrop());
        return false;
    }
};

export const register = (data: Tony.Auth.LoginData) => async (dispatch: Dispatch) => {
    dispatch(setBackdrop());
    try {
        const status = await api.register(data);
        if (status === 200) {
            return await dispatch(login(data) as any);
        }
    } catch (err) {
        dispatch(unsetBackdrop());
    }
    return false;
};

export const logout = () => async (dispatch: Dispatch) => {
    dispatch(setBackdrop());
    try {
        await api.logout();
    } catch { /* empty */ }
    dispatch(resetAppState() as any);
    dispatch(unsetBackdrop());
};

export default authSlice.reducer;
