import { Box, Button, Typography } from '@mui/material';
import { toHomePage } from '../actions/navigation.ts';

export default function NotFoundPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: window.innerHeight * 0.9,
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
