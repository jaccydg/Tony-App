import { Box } from '@mui/material';
import LoginForm from '../components/auth/LoginForm.tsx';

export default function LoginPage() {
    return (
        <Box
            height={window.innerHeight}
            width='100vw'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <LoginForm />
        </Box>
    );
}
