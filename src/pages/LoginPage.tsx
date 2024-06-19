import { Box } from '@mui/material';
import LoginForm from '../components/auth/LoginForm.tsx';

export default function LoginPage() {
    return (
        <Box
            height={`min(${window.innerHeight}px, 100vh)`}
            width='100vw'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <LoginForm />
        </Box>
    );
}
