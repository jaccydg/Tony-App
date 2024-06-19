/* eslint-disable import/no-unresolved */
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { themeModes } from '../../slices/themeSlice.ts';
// @ts-ignore
import Logo from '../../resources/logo.svg?react';

export default function FormLogo() {
    const theme: any = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box
            width='100%'
            display='flex'
            justifyContent='center'
            position='fixed'
            left={0}
            top={75}
        >
            <Box width={desktop ? 350 : '70%'}>
                <Logo fill={theme.palette.mode === themeModes.light ? 'black' : 'white'} />
            </Box>
        </Box>
    );
}
