import { $host, $authHost } from "./indexHttp.js";
import { jwtDecode } from 'jwt-decode';

export const registrations = async (login, password) => {
    const { data } = await $host.post('user/registration', { login, password, role: 'USER' }) //ответ от сервера
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const authorizations = async (login, password) => {
    const { data } = await $host.post('user/authorization', { login, password }) //ответ от сервера
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get('user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const fetchUser = async () => {
    const { data } = await $authHost.get('user/profile')
    return data;
}

export const checkLogin = async (login) => {
    try {
        const { data } = await $host.post('user/checkLogin', { login }); 
        return data;
    } catch (error) {
        return error; 
    }
}

