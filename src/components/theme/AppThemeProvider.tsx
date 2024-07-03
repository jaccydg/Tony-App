import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getUserSettings } from '../../helpers/LocalStorageHelper.ts';
import { setThemeMode } from '../../slices/themeSlice.ts';
import { getCustomTheme } from '../../helpers/ThemeHelper.ts';
import { State } from '../../store/store.ts';

export default function AppThemeProvider(props: { children: JSX.Element[] }) {
    const { children } = props;
    const dispatch = useDispatch();
    const themeMode = useSelector((state: State) => state.theme.themeMode);

    useEffect(() => {
        const localstorageUserSettings = getUserSettings();
        dispatch(setThemeMode(localstorageUserSettings.themeMode));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theme = useMemo(
        // @ts-ignore
        () => responsiveFontSizes(createTheme(getCustomTheme(themeMode))),
        [themeMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
