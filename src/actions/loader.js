import { initialLoading } from '../slices/loaderSlice';
import store from '../store/store';

const dispatchInitialLoading = () => store.dispatch(initialLoading());
export default dispatchInitialLoading;
