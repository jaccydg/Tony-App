import { toggleThemeModePersist } from '../slices/themeSlice';
import store from '../store/store';

const dispatchToggleThemeModePersist = () => store.dispatch(toggleThemeModePersist());
export default dispatchToggleThemeModePersist;
