import axios from 'axios';

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

const getRuntimeConfigJsonFile = async () => {
    const params = {
        url: '/config.json?v=20240201',
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };
    const res = await axios.request(params);
    return res.data;
};

async function login(data: Tony.Auth.LoginData): Promise<string> {
    return `${data.username}/${data.password}`;
}
async function logout(): Promise<string> {
    return '';
}

async function getUser(): Promise<{ name: string }> {
    return {
        name: 'Giulio',
    };
}

async function getStations(): Promise<{ stations: Tony.App.Station[] }> {
    return {
        stations: [
            {
                id: 's_psm',
                name: 'Parco Seminario',
                geo: [45.956556450410496, 12.676544837459007],
            },
            {
                id: 's_uni',
                name: 'Università',
                geo: [45.95235518648734, 12.680690412190218],
            },
            {
                id: 's_ald',
                name: 'Aldi',
                geo: [45.953751243075104, 12.687658577688712],
            },
            {
                id: 's_nns',
                name: 'Naonis',
                geo: [45.95331995066523, 12.6725225753],
            },
        ],
    };
}

const api = {
    getRuntimeConfigJsonFile,
    login,
    getUser,
    logout,
    getStations,
};

export default api;
