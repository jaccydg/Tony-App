import {
    BottomNavigation, BottomNavigationAction,
    Box, Button,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import routes from '../../routes/Routes.ts';
import { toPage } from '../../actions/navigation.ts';
import ButtonLightDarkTheme from './ButtonLightDarkTheme.tsx';
import { navBarHeight } from '../../helpers/Layout.ts';
import { dispatchLogout } from '../../actions/auth.ts';

export default function NavBar() {
    const location = useLocation();
    const pageValue = location.pathname === routes.home
        || location.pathname === routes.balance
        || location.pathname === routes.profile
        ? location.pathname : false;

    const handleTabChange = (_event: any, newValue: string) => {
        toPage(newValue);
    };

    const handleClickLogout = () => {
        dispatchLogout();
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
                    height: navBarHeight,
                    bottom: 0,
                }}
                value={pageValue}
                onChange={handleTabChange}
            >
                <BottomNavigationAction value={routes.home} icon={<HomeRoundedIcon sx={{ fontSize: 45 }} />} />
                <BottomNavigationAction value={routes.balance} icon={<WalletIcon sx={{ fontSize: 45 }} />} />
                <BottomNavigationAction value={routes.profile} icon={<PersonIcon sx={{ fontSize: 45 }} />} />
            </BottomNavigation>
        </div>
    );
}
