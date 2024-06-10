import {
    BottomNavigation, BottomNavigationAction,
    Box, Button,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import routes from '../../routes/Routes';
import { toPage } from '../../actions/navigation';
import ButtonLightDarkTheme from './ButtonLightDarkTheme';

export default function NavBar() {
    const location = useLocation();
    const pageValue = location.pathname === routes.home
        || location.pathname === routes.login
        ? location.pathname : false;

    const handleTabChange = (event, newValue) => {
        toPage(newValue);
    };

    const handleClickLogout = () => {
        dispatchEvent();
    };

    return (
        <div>
            <Box
                sx={{
                    zIndex: 1000,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                }}
            >
                <ButtonLightDarkTheme />
                <Button
                    variant='contained'
                    onClick={handleClickLogout}
                >
                    Logout
                </Button>
            </Box>
            <BottomNavigation
                sx={{
                    position: 'fixed',
                    width: '100vw',
                    bottom: 0,
                }}
                value={pageValue}
                onChange={handleTabChange}
            >
                <BottomNavigationAction value={routes.home} icon={<HomeRoundedIcon />} />
                <BottomNavigationAction value={routes.balance} icon={<WalletIcon />} />
                <BottomNavigationAction value={routes.profile} icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    );
}
