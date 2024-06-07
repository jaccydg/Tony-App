import { Box, useTheme } from '@mui/material';
import { ReactComponent as Logo } from '../../resources/logo.svg';

export default function LogoLoader(props) {
    const { loading } = props;
    const theme = useTheme();

    return (
        <Box
            className='loaderContainer'
            sx={{
                position: 'fixed',
                zIndex: theme.zIndex.drawer,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: theme.palette.background.default,
                pointerEvents: loading ? 'auto' : 'none',
                opacity: loading ? 1 : 0,
                transition: '0.3s all ease-out',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50%', // `calc(50% - ${appBarHeight}px)`,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    gap: 3,
                    alignItems: 'center',
                    maxWidth: '50%',
                    width: '500px',
                    svg: {
                        fill: theme.palette.text.primary,
                    },
                }}
            >
                <Logo />
            </Box>
        </Box>
    );
}
