import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ReactComponent as Logo } from '../../resources/logo.svg';

export default function FormLogo() {
    const theme = useTheme();
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
                <Logo />
            </Box>
        </Box>
    );
}
