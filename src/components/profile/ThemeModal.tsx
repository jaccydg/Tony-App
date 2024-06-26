import * as React from 'react';
import Box from '@mui/material/Box';
import PaletteIcon from '@mui/icons-material/Palette';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
    List, ListItem, ListItemIcon,
    ListItemText, Grid, Card,
    CardActionArea,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleThemeModePersist } from '../../slices/themeSlice.ts';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    height: '30%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ThemeModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleThemeModePersist() as any);
    };

    return (
        <div>
            <List onClick={handleOpen}>
                <ListItem>
                    <ListItemIcon>
                        <PaletteIcon sx={{ marginRight: '32px', marginTop: '4px' }} />
                        <ListItemText primary='Aspetto' />
                    </ListItemIcon>
                </ListItem>
            </List>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant='h6' component='h2'>
                        Theme
                    </Typography>
                    <Box sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '75%',
                        mr: -1.5,
                    }}
                    >
                        <Grid container spacing={2} justifyContent='center' alignItems='center'>
                            <Grid item xs={4} mr={2} onClick={handleClick}>
                                <Card>
                                    <CardActionArea>
                                        <Box display='flex' flexDirection='column' alignItems='center' p={2}>
                                            <LightModeIcon />
                                            <Typography variant='body2'>Light</Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4} ml={2} onClick={handleClick}>
                                <Card>
                                    <CardActionArea>
                                        <Box display='flex' flexDirection='column' alignItems='center' p={2}>
                                            <DarkModeIcon />
                                            <Typography variant='body2'>Dark</Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
