import { Box } from '@mui/material';
import SignupForm from '../components/auth/SignupForm.tsx';

export default function SignupPage() {
    return (
        <Box
            height={`min(${window.innerHeight}px, 100vh)`}
            width='100vw'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <SignupForm />
        </Box>
    );
}
