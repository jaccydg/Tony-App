import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { State } from '../../store/store.ts';
import { initialLoading } from '../../slices/loaderSlice.ts';
import { authCookieCheck } from '../../slices/authSlice.ts';

export default function AuthManager(props: { children: JSX.Element }) {
    const dispatch = useDispatch();
    const { children } = props;
    const authState = useSelector((state: State) => state.auth);

    useEffect(() => {
        dispatch(initialLoading() as any);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (authState.cookieCheckEnabled) {
            dispatch(authCookieCheck() as any);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authState.cookieCheckEnabled]);

    if (authState.fulfilled && !authState.isUserAuthenticated) return children;

    if (authState.fulfilled && authState.isUserAuthenticated && authState.initDataFulfilled) return children;
}
