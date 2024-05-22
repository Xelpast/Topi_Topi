import axios from "axios";
// https://topi-topi.up.railway.app/
// http://localhost:5000/
const AXIOS_URL = 'https://topi-topi.up.railway.app/';

const $host = axios.create({
    baseURL: 'https://topi-topi.up.railway.app/'
})

const $authHost = axios.create({
    baseURL: 'https://topi-topi.up.railway.app/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor); 

export {
    $host,
    $authHost,
    AXIOS_URL
}