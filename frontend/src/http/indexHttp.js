import axios from "axios";
// https://topi-topi.up.railway.app/
// http://localhost:5000/
const AXIOS_URL = 'http://localhost:5000/';

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
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