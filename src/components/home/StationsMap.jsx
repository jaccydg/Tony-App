import { Box } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { navBarHeight } from '../../helpers/Layout';

export default function StationsMap() {
    const home = useSelector((state) => state.home);
    const theme = useTheme();

    return (
        <Box
            height={`${window.innerHeight - navBarHeight}px`}
            width='100vw'
            overflow='hidden'
        >
            <Map
                defaultCenter={[45.95229090403742, 12.680669869586207]}
                defaultZoom={15}
                zoomSnap={false}
            >
                {
                    home.stations.map((station) => (
                        <Marker
                            key={station.id}
                            width={50}
                            anchor={station.geo}
                            color={theme.palette.primary.main}
                            onClick={() => alert(station.name)}
                        />
                    ))
                }
            </Map>
        </Box>
    );
}
