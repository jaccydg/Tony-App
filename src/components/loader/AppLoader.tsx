/* eslint-disable import/no-unresolved */
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// @ts-ignore
import Logo from '../../resources/logo.svg?react';
import { State } from '../../store/store.ts';
import { themeModes } from '../../slices/themeSlice.ts';

export default function AppLoader() {
    const loaderEnabled = useSelector((state: State) => state.loader.loaderEnabled);
    const theme: any = useTheme();

    if (loaderEnabled) {
        return (
            <Box
                className='loaderContainer'
                sx={{
                    position: 'fixed',
                    zIndex: theme.zIndex.drawer,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.background.default,
                    transition: '0.3s all ease-out',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '50%', // `calc(50% - ${appBarHeight}px)`,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        gap: 3,
                        alignItems: 'center',
                        maxWidth: '50%',
                        width: '500px',
                        svg: {
                            fill: theme.palette.text.primary,
                        },
                    }}
                >
                    <Logo fill={theme.palette.mode === themeModes.light ? 'black' : 'white'} />
                </Box>
            </Box>
        );
    }
}
