import { Button, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import dispatchToggleThemeModePersist from '../../actions/theme';

export default function ButtonLightDarkTheme() {
    const theme = useTheme();
    return (
        <Button
            variant='outlined'
            onClick={dispatchToggleThemeModePersist}
            sx={{
                px: 1.4,
                minWidth: 0,
            }}
        >
            {(theme.palette.mode === 'light')
                ? <DarkModeOutlinedIcon />
                : <LightModeOutlinedIcon />}
        </Button>
    );
}
