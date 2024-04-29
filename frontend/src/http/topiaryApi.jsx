import { $host, $authHost } from "./indexHttp";

export const fetchTopiary = async () => {
    const {data} = await $host.get('/topiary') 
    return data;
}

export const fetchOneTopiary = async (id) => {
    const {data} = await $host.get('/topiary/' + id) 
    return data;
}
