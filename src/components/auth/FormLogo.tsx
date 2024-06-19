import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
// @ts-ignore
import logo from '../../resources/logo.svg';

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
                <img src={logo} alt='TONY' />
            </Box>
        </Box>
    );
}
