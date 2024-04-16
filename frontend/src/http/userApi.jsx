import { $host, $authHost } from "./indexHttp";
import {jwtDecode} from 'jwt-decode';

export const registrations = async (login, password) => {
    const {data} = await $host.post('api/user/registration', { login, password, role: 'ADMIN' }) //ответ от сервера
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const authorizations = async (login, password, repeatPassword) => {
    const {data} = await $host.post('api/user/authorization', { login, password, repeatPassword }) //ответ от сервера
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}