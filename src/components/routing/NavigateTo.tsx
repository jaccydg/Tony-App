import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { unsetNavigate } from '../../slices/navigationSlice.ts';
import { State } from '../../store/store.ts';

export default function NavigateTo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateState = useSelector((state: State) => state.navigation.navigate);

    useEffect(() => {
        if (navigateState.enabled) {
            dispatch(unsetNavigate());
            navigate(navigateState.to);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigateState]);

    return <div />;
}
