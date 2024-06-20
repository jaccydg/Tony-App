import { Box, Button } from '@mui/material';
import { navBarHeight } from '../../helpers/Layout.ts';
import { toQrScanPage } from '../../actions/navigation.ts';

export default function QrButton() {
    const handleClick = () => {
        toQrScanPage();
    };

    return (
        <Box
            position='absolute'
            zIndex={100}
            bottom={navBarHeight}
            right={0}
            p={2}
        >
            <Button variant='contained' onClick={handleClick}>
                SCAN QR
            </Button>
        </Box>
    );
}
