import { toggleThemeModePersist } from '../slices/themeSlice.ts';
import store from '../store/store.ts';

const dispatchToggleThemeModePersist = () => store.dispatch(toggleThemeModePersist());
export default dispatchToggleThemeModePersist;
