import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
    return (
        <Container
            maxWidth={false}
            disableGutters
        >
            <Outlet />
        </Container>
    );
}
