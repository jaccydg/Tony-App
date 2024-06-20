import {
    Box, Button,
    Card,
    Modal, Typography,
} from '@mui/material';

export default function StationInfo(props: { open: boolean, setOpen: Function, station: Tony.App.StationInfo | undefined }) {
    const {
        open,
        setOpen,
        station,
    } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenNavigator = () => {
        if (station) window.open(`https://maps.google.com?q=${station.geo[0]},${station.geo[1]}`);
    };

    if (station) {
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
                            <Typography variant='h4'>{`${station.name} Station`}</Typography>
                            <Typography mt={1}>{`Available spots: ${station.free} / ${station.total}`}</Typography>
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
