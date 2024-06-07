import { Box, Button, Typography } from '@mui/material';
import { toHomePage } from '../actions/navigation';

export default function NotFoundPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh',
            }}
        >
            <Typography
                component='div'
                variant='h5'
            >
                Oops, la pagina non esiste.
            </Typography>
            <Button
                variant='outlined'
                onClick={toHomePage}
                sx={{ marginTop: 4 }}
            >
                Val alla pagina iniziale
            </Button>
        </Box>

    );
}
