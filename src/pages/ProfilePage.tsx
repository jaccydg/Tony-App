import {
    Avatar, Box, Container,
    Divider, List, ListItem, ListItemIcon,
    ListItemText, Typography, styled,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThemeToggles from '../components/profile/ThemeModal';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CurrencyMenuItem from '../components/profile/CurrencyMenu';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';
import EditProfile from '../components/profile/EditProfile';

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    textAlign: 'center',
    height: '100vh',
}));

const StyledAvatar = styled(Avatar)(({ }) => ({
    width: 100,
    height: 100,
    margin: '0 auto',
}));


export default function ProfilePage() {
    const dispatch = useDispatch();

    const handleClickLogout = () => {
        dispatch(logout() as any);
    };

    return (
        <StyledContainer maxWidth='sm'>
            <Box>
                <StyledAvatar
                    alt='T'
                    src='/path/to/avatar.jpg'
                />
                <Typography variant='h5' margin='0.35em'>
                    Tony App
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                    tonytony@chopper.it
                </Typography>
                <EditProfile name={''} onSave={function (_newName: string): void {
                    throw new Error('Function not implemented.');
                } } />
            </Box>
            <Divider sx={{ my: 1.5 }} />
            <List>
                <ListItem>
                    <ListItemText primary='Account' secondary='0018 1994 1293 1841' />
                    {/* <IconButton>
                        <CopyIcon />
                    </IconButton> */}
                </ListItem>
                <ListItem>
                    <ListItemText primary='Moneta' />
                    <CurrencyMenuItem />
                </ListItem>
                <ListItem>
                    <ListItemText primary='Creato il' secondary='20/06/2024' />
                </ListItem>
            </List>
            <Divider sx={{ my: 1.5 }} />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary=' Le mie carte' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Preferiti' />
                </ListItem>
            </List>
            <Divider sx={{ my: 1.5 }} />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ColorLensIcon />
                    </ListItemIcon>
                    <ListItemText primary='Aspetto' />
                    <ThemeToggles />
                </ListItem>
            </List>
            <Divider sx={{ my: 1.5 }} />
            <List>
                <ListItem onClick={handleClickLogout}>
                    <ListItemIcon>
                        <LogoutIcon style={{ color: red[500] }} />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </List>
        </StyledContainer>
    );
}
