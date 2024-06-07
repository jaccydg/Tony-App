import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage';

export default function AppError() {
    const errorPageState = useSelector((state) => state.error.errorPage);
    const { enabled, message, title } = errorPageState;
    if (enabled) {
        return (
            <ErrorPage
                errorData={{ message, title }}
                handleRetry={() => window.location.reload()}
            />
        );
    }
}
