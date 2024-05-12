import { $host, $authHost } from "./indexHttp.js";

export const fetchTopiary = async () => {
    const { data } = await $host.get('/topiary')
    return data;
}

export const fetchOneTopiary = async (id) => {
    const { data } = await $host.get('/topiary/' + id)
    return data;
}

export const addTopiary = async (topiaryData) => {
    try {
        const { data } = await $authHost.post('/topiary', topiaryData);
        return data;
    } catch (error) {
        console.error('Ошибка при добавлении товара:', error);
        throw error;
    }
};

export const addTopiaryInfo = async (topiaryId, info) => {
    try {
        const {data} = await $authHost.post(`/topiary/${topiaryId}`, info);
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateTopiary = async (topiaryId, topiaryData) => {
    try {
        const { data } = await $authHost.put(`/topiary/${topiaryId}`, topiaryData);
        return data;
    } catch (error) {
        console.error('Ошибка при обновлении товара:', error);
        throw error;
    }
};

export const deleteTopiary = async (topiaryId) => {
    try {
        const { data } = await $authHost.delete(`/topiary/${topiaryId}`);
        return data;
    } catch (error) {
        console.error('Ошибка при удалении товара:', error);
        throw error;
    }
};
