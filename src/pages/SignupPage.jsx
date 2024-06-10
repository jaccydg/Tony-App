import { Box } from '@mui/material';
import SignupForm from '../components/auth/SignupForm';

export default function SignupPage() {
    return (
        <Box
            height={window.innerHeight}
            width='100vw'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <SignupForm />
        </Box>
    );
}
