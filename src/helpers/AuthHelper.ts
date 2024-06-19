import Cookies from 'js-cookie';

const authCookieName = 'token';

const setAuthToken = (value: string) => {
    // const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000)
    const inOneDay = 1;
    Cookies.set(authCookieName, value, { expires: inOneDay });
};

const getAuthToken = () => Cookies.get(authCookieName);

const deleteAuthToken = () => {
    Cookies.remove(authCookieName);
};

export {
    setAuthToken,
    getAuthToken,
    deleteAuthToken,
};
