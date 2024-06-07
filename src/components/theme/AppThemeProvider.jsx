import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getUserSettings } from '../../helpers/LocalStorageHelper';
import { setThemeMode } from '../../slices/themeSlice';
import { getCustomTheme } from '../../helpers/ThemeHelper';

export default function AppThemeProvider(props) {
    const { children } = props;
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.theme.themeMode);

    useEffect(() => {
        const localstorageUserSettings = getUserSettings();
        dispatch(setThemeMode(localstorageUserSettings.themeMode));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theme = useMemo(
        () => responsiveFontSizes(createTheme(getCustomTheme(themeMode))),
        [themeMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
