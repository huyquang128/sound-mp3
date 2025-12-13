import axios from 'axios';
import { store } from '../redux/store';

export const BASE_URL = 'http://localhost:3000/api/v1/';

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

const instancePrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

instancePrivate.interceptors.request.use(
    function (config) {
        const state = store.getState();
        const accessToken = state.auth.accessToken;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },

    function (error) {
        return Promise.reject(error);
    }
);

instancePrivate.interceptors.response.use(
    function onFulfilled(response) {
        return response;
    },

    function onRejected(error) {
        return Promise.reject(error);
    }
);
