import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import dispatchFetchAppRuntimeConfig from '../../actions/runtimeConfig';

export default function RuntimeConfigLoader(props) {
    const { children } = props;
    const runtimeConfigState = useSelector((state) => state.runtimeConfig);

    useEffect(() => {
        dispatchFetchAppRuntimeConfig();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (runtimeConfigState.fulfilled && !runtimeConfigState.isError) return children;
}
