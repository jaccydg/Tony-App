import Cookies from 'js-cookie';

const accessTokenName = 'accessToken';
const refreshTokenName = 'refreshToken';

const setAuthToken = (value: string, expires: number) => {
    Cookies.set(accessTokenName, value, { expires });
};
const setRefreshRoken = (value: string) => {
    Cookies.set(refreshTokenName, value);
};

const getAuthToken = () => Cookies.get(accessTokenName);
const getRefreshRoken = () => Cookies.get(refreshTokenName);

const deleteAuthToken = () => {
    Cookies.remove(accessTokenName);
};
const deleteRefreshToken = () => {
    Cookies.remove(refreshTokenName);
};

export {
    setAuthToken,
    setRefreshRoken,
    getAuthToken,
    getRefreshRoken,
    deleteAuthToken,
    deleteRefreshToken,
};
