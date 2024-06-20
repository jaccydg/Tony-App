import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavigateTo from '../components/routing/NavigateTo.tsx';
import CircularBackdrop from '../components/backdrop/CircularBackdrop.tsx';
import PageLayout from '../components/layout/PageLayout.tsx';
import routes from './Routes.ts';
import redirectIfAuth from '../components/routing/RedirectIfAuth.tsx';
import requireAuth from '../components/routing/RequireAuth.tsx';

const HomePage = lazy(() => import('../pages/HomePage.tsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.tsx'));
const SignupPage = lazy(() => import('../pages/SignupPage.tsx'));
const BalancePage = lazy(() => import('../pages/BalancePage.tsx'));
const ProfilePage = lazy(() => import('../pages/HomePage.tsx'));
const NotFoundPage = lazy(() => import('../pages/ProfilePage.tsx'));
const QrScanPage = lazy(() => import('../pages/QrScanPage.tsx'));

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavigateTo />
            <Suspense fallback={<CircularBackdrop open />}>
                <Routes>
                    <Route path={routes.login} element={redirectIfAuth(<LoginPage />)} />
                    <Route path={routes.signup} element={redirectIfAuth(<SignupPage />)} />
                    <Route path={routes.home} element={<PageLayout />}>
                        <Route index element={requireAuth(<HomePage />)} />
                        <Route path={routes.balance} element={requireAuth(<BalancePage />)} />
                        <Route path={routes.profile} element={requireAuth(<ProfilePage />)} />
                        <Route path={routes.qr} element={requireAuth(<QrScanPage />)} />
                    </Route>
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
