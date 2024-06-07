/* eslint-disable react/jsx-filename-extension */
import { CssBaseline } from '@mui/material';
import AppThemeProvider from './components/theme/AppThemeProvider';
import AppBackdrop from './components/backdrop/AppBackdrop';
import AppLoader from './components/loader/AppLoader';
import RuntimeConfigLoader from './components/runtimeConfig/RuntimeConfigLoader';
import AppRouter from './routes/AppRouter';
import AppError from './components/error/AppError';
import AuthManager from './components/auth/AuthManager';

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
