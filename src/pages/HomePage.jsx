import { Box } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { navBarHeight } from '../helpers/Layout';

export default function HomePage() {
    return (
        <Box>
            <Box height={`${window.innerHeight - navBarHeight}px`} width='100vw' overflow='hidden'>
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
