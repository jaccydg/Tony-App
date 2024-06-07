import { authCookieCheck, login, logout } from '../slices/authSlice';
import store from '../store/store';
import { backdropAction } from './backdrop';

export const dispatchLogin = (loginData) => backdropAction(() => store.dispatch(login(loginData)));
export const dispatchLogout = () => backdropAction(() => store.dispatch(logout()));
export const dispatchAuthCookieCheck = () => backdropAction(() => store.dispatch(authCookieCheck()));
