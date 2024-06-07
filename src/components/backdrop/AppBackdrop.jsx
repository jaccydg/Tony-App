import { useSelector } from 'react-redux';
import CircularBackdrop from './CircularBackdrop';

export default function AppBackdrop() {
    const backdropEnabled = useSelector((state) => state.backdrop.backdropEnabled);
    return <CircularBackdrop open={backdropEnabled} />;
}
