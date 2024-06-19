import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes/Routes.ts';
import { State } from '../../store/store.ts';

function RedirectIfAuth(props: { children: JSX.Element }) {
    const { children } = props;
    const isUserAuthenticated = useSelector((state: State) => state.auth.isUserAuthenticated);
    return isUserAuthenticated
        ? <Navigate to={routes.home} />
        : children;
}

const redirectIfAuth = (children: JSX.Element) => (
    <RedirectIfAuth>
        {children}
    </RedirectIfAuth>
);
export default redirectIfAuth;
