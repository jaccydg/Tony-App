import { useState } from 'react';
import { Box } from '@mui/material';
import StationsMap from '../components/home/StationsMap.tsx';
import StationInfo from '../components/home/StationInfo.tsx';
import api from '../api/Api.ts';
import QrButton from '../components/home/QrButton.tsx';

export default function HomePage() {
    const [stationInfoOpen, setStationInfoOpen] = useState(false);
    const [openStation, setOpenStation] = useState<undefined | Tony.App.StationInfo>(undefined);

    const handleOpenStation = async (name: string) => {
        const station = await api.getStationInfo(name);
        setOpenStation(station);
        setStationInfoOpen(true);
    };

    return (
        <Box>
            <StationsMap handleClick={handleOpenStation} />
            <StationInfo open={stationInfoOpen} setOpen={setStationInfoOpen} station={openStation} />
            <QrButton />
        </Box>
    );
}
