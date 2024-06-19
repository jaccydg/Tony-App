import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { themeModes } from '../../slices/themeSlice.ts';

export default function CircularBackdrop(props: { open: boolean }) {
    const { open } = props;

    return (
        <Backdrop
            sx={{
                backgroundColor: (theme) => {
                    if (theme.palette.mode === themeModes.light) return '#ffffff20';
                    return '#00000020';
                },
                zIndex: (theme) => theme.zIndex.drawer + 101, // also above modals
                userSelect: 'none',
            }}
            open={open}
        >
            <CircularProgress color='primary' />
        </Backdrop>
    );
}
