import { initialLoading } from '../slices/loaderSlice.ts';
import store from '../store/store.ts';

const dispatchInitialLoading = () => store.dispatch(initialLoading());
export default dispatchInitialLoading;
