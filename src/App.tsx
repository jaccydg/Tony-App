/* eslint-disable react/jsx-filename-extension */
import { CssBaseline } from '@mui/material';
import AppThemeProvider from './components/theme/AppThemeProvider.tsx';
import AppBackdrop from './components/backdrop/AppBackdrop.tsx';
import AppLoader from './components/loader/AppLoader.tsx';
import RuntimeConfigLoader from './components/runtimeConfig/RuntimeConfigLoader.tsx';
import AppRouter from './routes/AppRouter.tsx';
import AppError from './components/error/AppError.tsx';
import AuthManager from './components/auth/AuthManager.tsx';

export default function App() {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <AppBackdrop />
            <AppLoader />
            <AppError />
            <RuntimeConfigLoader>
                <AuthManager>
                    <AppRouter />
                </AuthManager>
            </RuntimeConfigLoader>
        </AppThemeProvider>
    );
}
