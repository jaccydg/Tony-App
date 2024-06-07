import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes/Routes';

function RedirectIfAuth(props) {
    const { children } = props;
    const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated);
    return isUserAuthenticated
        ? <Navigate to={routes.home} />
        : children;
}

const redirectIfAuth = (children) => (
    <RedirectIfAuth>
        {children}
    </RedirectIfAuth>
);
export default redirectIfAuth;
