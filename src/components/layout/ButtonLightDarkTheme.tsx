import { Button, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useDispatch } from 'react-redux';
import { toggleThemeModePersist } from '../../slices/themeSlice.ts';

export default function ButtonLightDarkTheme() {
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleClick = () => {
        dispatch(toggleThemeModePersist() as any);
    };

    return (
        <Button
            variant='outlined'
            onClick={handleClick}
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
