import { $host, $authHost } from "./index_http";

export const registrations = async (nickname, login, password) => {
    const response = await $host.post('api/auth/registration', { nickname, login, password, role: 'ADMIN' }) //ответ от сервера
    return response;
}

export const authorization = async (login, password) => {
    const response = await $host.post('api/auth/authorization', { login, password }) //ответ от сервера
    return response;
}

export const check = async () => {
    const response = await $host.post('api/auth/registration', {})
    return response;
}