import { useSelector } from 'react-redux';
import LogoLoader from './LogoLoader';

export default function AppLoader() {
    const loaderEnabled = useSelector((state) => state.loader.loaderEnabled);

    if (loaderEnabled) return <LogoLoader loading />;
}
