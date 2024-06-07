import { fetchAppRuntimeConfig } from '../slices/runtimeConfigSlice';
import store from '../store/store';
import { backdropAction } from './backdrop';

const dispatchFetchAppRuntimeConfig = () => backdropAction(() => store.dispatch(fetchAppRuntimeConfig()));
export default dispatchFetchAppRuntimeConfig;
