import { useSelector } from 'react-redux';
import CircularBackdrop from './CircularBackdrop.tsx';
import { State } from '../../store/store.ts';

export default function AppBackdrop() {
    const backdropEnabled = useSelector((state: State) => state.backdrop.backdropEnabled);
    return <CircularBackdrop open={backdropEnabled} />;
}
