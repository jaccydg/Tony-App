import routes from '../routes/Routes';
import { setNavigate } from '../slices/navigationSlice';
import store from '../store/store';

export const toPage = (page) => store.dispatch(setNavigate(page));
export const toHomePage = () => store.dispatch(setNavigate(routes.home));
export const toLoginPage = () => store.dispatch(setNavigate(routes.login));
export const toSignupPage = () => store.dispatch(setNavigate(routes.signup));

export const onHomePage = () => window.location.pathname === routes.home;
export const onLoginPage = () => window.location.pathname === routes.login;
