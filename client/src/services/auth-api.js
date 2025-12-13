import { instance } from './instance';

export const registerApi = async (formData) => {
    const response = instance.post('/auth/register', formData);
    return response.data;
};

export const loginApi = async (formData) => {
    const response = instance.post('/auth/login', formData);
    return response.data;
};

export const logoutApi = async () => {
    const response = instance.post('/auth/logout', {});
    return response.data;
};

export const refreshTokenApi = async (formData) => {
    const response = instance.post('/auth/refresh-token', formData);
    return response.data;
};
