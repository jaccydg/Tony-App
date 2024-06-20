import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.ts';
import backdropReducer from '../slices/backdropSlice.ts';
import loaderReducer from '../slices/loaderSlice.ts';
import navigationReducer from '../slices/navigationSlice.ts';
import runtimeConfigReducer from '../slices/runtimeConfigSlice.ts';
import themeReducer from '../slices/themeSlice.ts';
import homeReducer from '../slices/homeSlice.ts';

const store = configureStore({
    reducer: {
        auth: authReducer,
        backdrop: backdropReducer,
        loader: loaderReducer,
        navigation: navigationReducer,
        runtimeConfig: runtimeConfigReducer,
        theme: themeReducer,
        home: homeReducer,
    },
});

const state = store.getState();

export type State = (typeof state);

export default store;
