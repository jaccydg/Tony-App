import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavigateTo from '../components/routing/NavigateTo';
import LoginPage from '../pages/LoginPage';
import PageLayout from '../components/layout/PageLayout';
import NotFoundPage from '../pages/NotFoundPage';
import routes from './Routes';
import redirectIfAuth from '../components/routing/RedirectIfAuth';
import requireAuth from '../components/routing/RequireAuth';
import CircularBackdrop from '../components/backdrop/CircularBackdrop';
import SignupPage from '../pages/SignupPage';
import BalancePage from '../pages/BalancePage';
import ProfilePage from '../pages/ProfilePage';

const HomePage = lazy(() => import('../pages/HomePage'));

export default function AppRouter() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavigateTo />
            <Suspense fallback={<CircularBackdrop open />}>
                <Routes>
                    <Route path={routes.login} element={redirectIfAuth(<LoginPage />)} />
                    <Route path={routes.signup} element={redirectIfAuth(<SignupPage />)} />
                    <Route path={routes.home} element={<PageLayout />}>
                        <Route index element={requireAuth(<HomePage />)} />
                        <Route path={routes.balance} element={requireAuth(<BalancePage />)} />
                        <Route path={routes.profile} element={requireAuth(<ProfilePage />)} />
                    </Route>
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
