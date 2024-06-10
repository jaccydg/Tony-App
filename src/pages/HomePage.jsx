import { Box, Button } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { dispatchLogout } from '../actions/auth';
import ButtonLightDarkTheme from '../components/layout/ButtonLightDarkTheme';
import { navBarHeight } from '../helpers/Layout';

export default function HomePage() {
    const handleClickLogout = () => {
        dispatchLogout();
    };

    return (
        <Box>
            <Box
                sx={{
                    zIndex: 1000,
                    position: 'fixed',
                }}
            >
                <Button
                    variant='contained'
                    onClick={handleClickLogout}
                >
                    Logout
                </Button>
                <ButtonLightDarkTheme />
            </Box>
            <Box height={`calc(100vh - ${navBarHeight}px)`} width='100vw' overflow='hidden'>
                <Map defaultCenter={[45.95229090403742, 12.680669869586207]} defaultZoom={15}>
                    <Marker
                        width={50}
                        anchor={[45.95229090403742, 12.680669869586207]}
                    />
                </Map>
            </Box>
        </Box>
    );
}
