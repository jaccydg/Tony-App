import {
    Avatar, Box,
    IconButton,
    Tab,
    Tabs,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import NavBarLogo from './NavBarLogo.tsx';
import { navBarHeight } from '../../helpers/Layout.ts';
import { toPage, toProfilePage } from '../../actions/navigation.ts';
import routes from '../../routes/Routes.ts';

export default function NavBarDesktop() {
    const page = useLocation().pathname;
    const theme: any = useTheme();

    const pageValue = page === routes.home
        || page === routes.balance ? page : false;

    const handleProfileClick = () => {
        toProfilePage();
    };

    const handleTabChange = (_event: any, newValue: any) => {
        toPage(newValue);
    };

    return (
        <Box
            height={navBarHeight}
            display='flex'
            alignItems='center'
            pl={3}
            pr={3}
        >
            <Box
                flexGrow={1}
                height='100%'
                display='flex'
                alignItems='center'
            >
                <Box height='55%'>
                    <NavBarLogo />
                </Box>
                <Tabs value={pageValue} onChange={handleTabChange}>
                    <Tab value={routes.home} label='Home' />
                    <Tab value={routes.balance} label='Balance' />
                </Tabs>
            </Box>
            <IconButton onClick={handleProfileClick}>
                <Avatar
                    alt='T'
                    src='/path/to/avatar.jpg'
                    sx={{
                        border: page === routes.profile ? `${theme.palette.primary.main} solid` : 'none',
                    }}
                />
            </IconButton>
        </Box>
    );
}
