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

async function login(data: Tony.Auth.LoginData): Promise<Tony.Auth.LoginResponse> {
    const params = createRequestBackend({
        url: 'login',
        method: 'POST',
        data: {
            email: data.email,
            password: data.password,
        },
    });
    const res = await axios.request(params);
    return res.data;
}
async function register(data: Tony.Auth.LoginData): Promise<number> {
    const params = createRequestBackend({
        url: 'register',
        method: 'POST',
        data: {
            email: data.email,
            password: data.password,
        },
    });
    const res = await axios.request(params);
    return res.status;
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

async function getGateways(): Promise<{ gateways: Tony.App.Gateway[] }> {
    const params = createRequestBackend({
        url: 'Gateways',
        method: 'GET',
    });
    const res = await axios.request(params);
    return res.data;
}

async function getGatewayInfo(id: number): Promise<Tony.App.GatewayInfo> {
    const params = createRequestBackend({
        url: `Gateways/${id}/GetGatewayInfo`,
        method: 'GET',
    });
    const res = await axios.request(params);
    return res.data;
}

const api = {
    getRuntimeConfigJsonFile,
    login,
    register,
    getUser,
    logout,
    getGateways,
    getGatewayInfo,
};

export default api;
