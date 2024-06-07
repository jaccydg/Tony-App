import axios from 'axios';

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

const getRuntimeConfigJsonFile = async () => {
    const params = {
        url: `${process.env.PUBLIC_URL}/config.json?v=20240201`,
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };
    const res = await axios.request(params);
    return res.data;
};

const login = async () => 'ochiasdohaskdh';
const logout = async () => '';

const getUser = async () => ({
    name: 'Giulio',
});

const api = {
    getRuntimeConfigJsonFile,
    login,
    getUser,
    logout,
};

export default api;
