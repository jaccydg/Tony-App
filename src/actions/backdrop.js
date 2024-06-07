import { setBackdrop, unsetBackdrop } from '../slices/backdropSlice';
import store from '../store/store';

export const dispatchSetBackdrop = () => store.dispatch(setBackdrop());
export const dispatchUnsetBackdrop = () => store.dispatch(unsetBackdrop());

export const backdropAction = async (fn, errorFn = null) => {
    store.dispatch(setBackdrop());
    let result;
    try {
        result = await fn();
    } catch (error) {
        if (errorFn) errorFn(error);
    }
    store.dispatch(unsetBackdrop());
    return result;
};
