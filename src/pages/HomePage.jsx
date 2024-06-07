import { Button, Typography } from '@mui/material';
import { dispatchLogout } from '../actions/auth';

export default function HomePage() {
    const handleClickLogout = () => {
        dispatchLogout();
    };

    return (
        <Typography color='primary'>
            <Button
                variant='contained'
                onClick={handleClickLogout}
            >
                Logout
            </Button>
        </Typography>
    );
}
