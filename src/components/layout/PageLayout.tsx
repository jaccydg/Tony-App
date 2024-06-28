import { Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import NavBarMobile from './NavBarMobile.tsx';
import NavBarDesktop from './NavBarDesktop.tsx';

export default function PageLayout() {
    const theme: any = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container
            maxWidth={false}
            disableGutters
            style={{ overflow: 'scroll' }}
        >
            {
                mobile
                    ? <NavBarMobile />
                    : <NavBarDesktop />
            }
            <Outlet />
        </Container>
    );
}
