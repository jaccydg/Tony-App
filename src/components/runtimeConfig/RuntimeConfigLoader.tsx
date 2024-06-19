import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import dispatchFetchAppRuntimeConfig from '../../actions/runtimeConfig.ts';
import { State } from '../../store/store.ts';

export default function RuntimeConfigLoader(props: { children: JSX.Element }) {
    const { children } = props;
    const runtimeConfigState = useSelector((state: State) => state.runtimeConfig);

    useEffect(() => {
        dispatchFetchAppRuntimeConfig();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (runtimeConfigState.fulfilled && !runtimeConfigState.isError) return children;
}
