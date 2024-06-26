import {
    Box, Button,
    Card,
    Modal, Typography,
} from '@mui/material';

export default function GatewayInfo(props: { open: boolean, setOpen: Function, gateway: Tony.App.GatewayInfo | undefined }) {
    const {
        open,
        setOpen,
        gateway,
    } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenNavigator = () => {
        if (gateway) window.open(`https://maps.google.com?q=${gateway.latitude},${gateway.longitude}`);
    };

    if (gateway) {
        return (
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    width='80vw'
                    maxWidth={400}
                    mt='50vh'
                    ml='50%'
                    sx={{ transform: 'translate(-50%, -75%)' }}
                >
                    <Card>
                        <Box height='20vh' p={3}>
                            <Typography variant='h4'>{`${gateway.name} Station`}</Typography>
                            <Typography mt={1}>{`Available spots: ${gateway.freeChargingStations} / ${gateway.totalChargingStations}`}</Typography>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 6,
                                    right: 6,
                                }}
                            >
                                <Button
                                    onClick={handleOpenNavigator}
                                >
                                    Open Maps
                                </Button>
                                <Button
                                    onClick={handleClose}
                                >
                                    Ok
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Modal>
        );
    }
}
