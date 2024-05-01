import { $host, $authHost } from "./indexHttp.js";
import { jwtDecode } from 'jwt-decode';

export const registrations = async (login, password) => {
    const {data} = await $host.post('user/registration', { login, password, role: 'ADMIN' }) //ответ от сервера
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const authorizations = async (login, password, repeatPassword) => {
    const {data} = await $host.post('user/authorization', { login, password, repeatPassword }) //ответ от сервера
    console.log(data);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const fetchUser = async () => {
    const {data} = await $authHost.get('user/profile') 
    console.log(data);
    return data;
}


// export const getUserData = async () => {
//     try {
//         const { data } = await $authHost.get('user/auth');
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.error('Ошибка при получении данных о пользователе:', error);
//         return null;
//     }
// }