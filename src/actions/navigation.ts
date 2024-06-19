import routes from '../routes/Routes.ts';
import { setNavigate } from '../slices/navigationSlice.ts';
import store from '../store/store.ts';

export const toPage = (page: string) => store.dispatch(setNavigate(page));
export const toHomePage = () => store.dispatch(setNavigate(routes.home));
export const toLoginPage = () => store.dispatch(setNavigate(routes.login));
export const toSignupPage = () => store.dispatch(setNavigate(routes.signup));

export const onHomePage = () => window.location.pathname === routes.home;
export const onLoginPage = () => window.location.pathname === routes.login;
export const onSignupPage = () => window.location.pathname === routes.signup;
