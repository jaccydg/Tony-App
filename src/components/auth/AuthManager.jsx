import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dispatchAuthCookieCheck } from '../../actions/auth';
import dispatchInitialLoading from '../../actions/loader';

export default function AuthManager(props) {
    const { children } = props;
    const authState = useSelector((state) => state.auth);

    useEffect(() => {
        dispatchInitialLoading();
    }, []);

    useEffect(() => {
        if (authState.cookieCheckEnabled) {
            dispatchAuthCookieCheck();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authState.cookieCheckEnabled]);

    if (authState.fulfilled && !authState.isUserAuthenticated) return children;

    if (authState.fulfilled && authState.isUserAuthenticated && authState.initDataFulfilled) return children;
}
