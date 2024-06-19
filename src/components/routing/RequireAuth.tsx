import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes/Routes.ts';
import { State } from '../../store/store.ts';

function RequireAuth(props: { children: JSX.Element }) {
    const { children } = props;
    const isUserAuthenticated = useSelector((state: State) => state.auth.isUserAuthenticated);
    return isUserAuthenticated
        ? children
        : <Navigate to={routes.login} />;
}

const requireAuth = (children: JSX.Element) => (
    <RequireAuth>
        {children}
    </RequireAuth>
);
export default requireAuth;
