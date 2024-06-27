/* eslint-disable import/no-unresolved */
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { themeModes } from '../../slices/themeSlice.ts';
// @ts-ignore
import Logo from '../../resources/logo.svg?react';

export default function NavBarLogo() {
    const theme: any = useTheme();

    return (
        <Box
            height='100%'
            boxSizing='content-box'
            flexShrink={0}
            sx={{
                svg: { height: '100%' },
            }}
        >
            <Logo fill={theme.palette.mode === themeModes.light ? 'black' : 'white'} />
        </Box>
    );
}
