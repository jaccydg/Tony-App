import { AppBar, Toolbar } from '@mui/material';
import { navBarHeight } from '../../helpers/Layout';

export default function NavBar() {
    return (
        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ '@media all': { minHeight: navBarHeight } }}> CIAO </Toolbar>
        </AppBar>
    );
}
