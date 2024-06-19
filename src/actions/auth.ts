import { authCookieCheck, login, logout } from '../slices/authSlice.ts';
import store from '../store/store.ts';
import { backdropAction } from './backdrop.ts';

export const dispatchLogin = (data: Tony.Auth.LoginData) => backdropAction(() => store.dispatch(login(data)));
export const dispatchLogout = () => backdropAction(() => store.dispatch(logout()));
export const dispatchAuthCookieCheck = () => backdropAction(() => store.dispatch(authCookieCheck()));
