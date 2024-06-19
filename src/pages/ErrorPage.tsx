import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function ErrorPage(props: { errorData: Tony.App.Error, handleRetry: Function }) {
    const {
        errorData,
        handleRetry,
    } = props;

    return (
        <Box sx={{
            width: '100vw',
            height: window.innerHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}
        >
            <ErrorOutlineOutlinedIcon color='error' sx={{ fontSize: 80 }} />
            <Typography variant='h5' mt={1} align='center'>
                {errorData.title}
            </Typography>
            <Typography variant='body2' mt={1}>
                {errorData.message}
            </Typography>
            {/* @ts-ignore */}
            <Button variant='outlined' sx={{ mt: 4 }} onClick={handleRetry}>
                Riprova
            </Button>
        </Box>
    );
}
