import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import backdropReducer from '../slices/backdropSlice';
import errorReducer from '../slices/errorSlice';
import loaderReducer from '../slices/loaderSlice';
import navigationReducer from '../slices/navigationSlice';
import runtimeConfigReducer from '../slices/runtimeConfigSlice';
import themeReducer from '../slices/themeSlice';
import homeReducer from '../slices/homeSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        backdrop: backdropReducer,
        error: errorReducer,
        loader: loaderReducer,
        navigation: navigationReducer,
        runtimeConfig: runtimeConfigReducer,
        theme: themeReducer,
        home: homeReducer,
    },
});
export default store;
