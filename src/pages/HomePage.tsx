import { useState } from 'react';
import { Box } from '@mui/material';
import GatewaysMap from '../components/home/GatewayMap.tsx';
import GatewayInfo from '../components/home/GatewayInfo.tsx';
import api from '../api/Api.ts';
import QrButton from '../components/home/QrButton.tsx';

export default function HomePage() {
    const [gatewayInfoOpen, setGatewayInfoOpen] = useState(false);
    const [openGateway, setOpenGateway] = useState<undefined | Tony.App.GatewayInfo>(undefined);

    const handleOpenGateway = async (id: number) => {
        const gateway = await api.getGatewayInfo(id);
        setOpenGateway(gateway);
        setGatewayInfoOpen(true);
    };

    return (
        <Box>
            <GatewaysMap handleClick={handleOpenGateway} />
            <GatewayInfo open={gatewayInfoOpen} setOpen={setGatewayInfoOpen} gateway={openGateway} />
            <QrButton />
        </Box>
    );
}
