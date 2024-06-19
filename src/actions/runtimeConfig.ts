import { fetchAppRuntimeConfig } from '../slices/runtimeConfigSlice.ts';
import store from '../store/store.ts';
import { backdropAction } from './backdrop.ts';

const dispatchFetchAppRuntimeConfig = () => backdropAction(() => store.dispatch(fetchAppRuntimeConfig()));
export default dispatchFetchAppRuntimeConfig;
