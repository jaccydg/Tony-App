import axios from 'axios';
import { getRuntimeConfig } from '../helpers/AppRuntimeConfig.ts';

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

const createRequestBackend = (params: { url: string, method: string, data: {} } | { url: string, method: string }) => {
    const requestParams = {
        ...params,
        baseURL: getRuntimeConfig().BACKEND_URL,
        headers: {
            accept: 'application/json',
        },
        withCredentials: true,
    };
    return requestParams;
};

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
    // const params = createRequestBackend({
    //     url: 'login',
    //     method: 'POST',
    //     data: {
    //         username: data.username,
    //         password: data.password,
    //     },
    // });
    // const res = await axios.request(params);
    // return res.data;
    return `${data.username}/${data.password}`;
}
async function logout(): Promise<string> {
    // const params = createRequestBackend({
    //     url: 'logout',
    //     method: 'POST',
    // });
    // const res = await axios.request(params);
    // return res.data;
    return '';
}

async function getUser(): Promise<{ name: string }> {
    // const params = createRequestBackend({
    //     url: 'getUser',
    //     method: 'GET',
    // });
    // const res = await axios.request(params);
    // return res.data;
    return {
        name: 'Giulio',
    };
}

async function getStations(): Promise<{ stations: Tony.App.Station[] }> {
    // const params = createRequestBackend({
    //     url: 'getStations',
    //     method: 'GET',
    // });
    // const res = await axios.request(params);
    // return res.data;
    return {
        stations: [
            {
                name: 'Parco Seminario',
                geo: [45.956556450410496, 12.676544837459007],
            },
            {
                name: 'Università',
                geo: [45.95235518648734, 12.680690412190218],
            },
            {
                name: 'Aldi',
                geo: [45.953751243075104, 12.687658577688712],
            },
            {
                name: 'Naonis',
                geo: [45.95331995066523, 12.6725225753],
            },
        ],
    };
}

async function getStationInfo(name: string): Promise<Tony.App.StationInfo> {
    // const params = createRequestBackend({
    //     url: 'getStationInfo',
    //     method: 'GET',
    //     data: {
    //         name
    // }
    // });
    // const res = await axios.request(params);
    // return res.data;
    const free = Math.floor((Math.random() * 30));
    const total = free + Math.floor((Math.random() * 15));
    return {
        geo: [45.956556450410496, 12.676544837459007],
        name,
        free,
        total,
    };
}

const api = {
    getRuntimeConfigJsonFile,
    login,
    getUser,
    logout,
    getStations,
    getStationInfo,
};

export default api;
