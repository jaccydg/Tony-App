import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/store.ts';
import { fetchAppRuntimeConfig } from '../../slices/runtimeConfigSlice.ts';

export default function RuntimeConfigLoader(props: { children: JSX.Element }) {
    const dispatch = useDispatch();
    const { children } = props;
    const runtimeConfigState = useSelector((state: State) => state.runtimeConfig);

    useEffect(() => {
        dispatch(fetchAppRuntimeConfig() as any);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (runtimeConfigState.fulfilled && !runtimeConfigState.isError) return children;
}
