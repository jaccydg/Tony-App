import { Box } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { navBarHeight } from '../../helpers/Layout.ts';
import { State } from '../../store/store.ts';

export default function GatewaysMap(props: { handleClick: Function }) {
    const {
        handleClick,
    } = props;
    const home = useSelector((state: State) => state.home);
    const theme: any = useTheme();

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
                    home.gateway.map((gateway: Tony.App.Gateway) => (
                        <Marker
                            key={gateway.id}
                            width={50}
                            anchor={[gateway.latitude, gateway.longitude]}
                            color={theme.palette.primary.main}
                            onClick={() => handleClick(gateway.id)}
                        />
                    ))
                }
            </Map>
        </Box>
    );
}
