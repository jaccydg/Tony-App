import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function PageLayout() {
    return (
        <Container
            maxWidth={false}
            disableGutters
        >
            <Outlet />
            <NavBar />
        </Container>
    );
}
