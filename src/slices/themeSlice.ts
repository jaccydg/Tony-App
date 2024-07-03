/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { setUserSettingsProp } from '../helpers/LocalStorageHelper.ts';

export const themeModes = {
    light: 'light',
    dark: 'dark',
};

const initialState = {
    themeMode: themeModes.dark,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.themeMode = (state.themeMode === themeModes.light)
                ? themeModes.dark : themeModes.light;
        },
        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
        },
    },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;

export const toggleThemeModePersist = () => (dispatch: Dispatch, getState: Function) => {
    dispatch(toggleThemeMode());
    const { themeMode } = getState().theme;
    setUserSettingsProp('themeMode', themeMode);
};

export default themeSlice.reducer;
