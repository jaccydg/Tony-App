import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage.tsx';
import { State } from '../../store/store.ts';

export default function AppError() {
    const errorPageState = useSelector((state: State) => state.error.errorPage);
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
