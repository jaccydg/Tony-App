import { setBackdrop, unsetBackdrop } from '../slices/backdropSlice.ts';
import store from '../store/store.ts';

export const dispatchSetBackdrop = () => store.dispatch(setBackdrop());
export const dispatchUnsetBackdrop = () => store.dispatch(unsetBackdrop());

export const backdropAction = async (fn: Function, errorFn: Function | undefined = undefined) => {
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
