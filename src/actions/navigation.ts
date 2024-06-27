import routes from '../routes/Routes.ts';
import { setNavigate } from '../slices/navigationSlice.ts';
import store from '../store/store.ts';

export const toPage = (page: string) => store.dispatch(setNavigate(page));
export const toHomePage = () => store.dispatch(setNavigate(routes.home));
export const toLoginPage = () => store.dispatch(setNavigate(routes.login));
export const toSignupPage = () => store.dispatch(setNavigate(routes.signup));
export const toBalancePage = () => store.dispatch(setNavigate(routes.balance));
export const toProfilePage = () => store.dispatch(setNavigate(routes.profile));
export const toQrScanPage = () => store.dispatch(setNavigate(routes.qr));

export const onHomePage = () => window.location.pathname === routes.home;
export const onLoginPage = () => window.location.pathname === routes.login;
export const onSignupPage = () => window.location.pathname === routes.signup;
export const onBalancePage = () => window.location.pathname === routes.balance;
export const onProfilePage = () => window.location.pathname === routes.profile;
export const onQrScanPage = () => window.location.pathname === routes.qr;
