import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes/Routes';

function RequireAuth(props) {
    const { children } = props;
    const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated);
    return isUserAuthenticated
        ? children
        : <Navigate to={routes.login} />;
}

const requireAuth = (children) => (
    <RequireAuth>
        {children}
    </RequireAuth>
);
export default requireAuth;
