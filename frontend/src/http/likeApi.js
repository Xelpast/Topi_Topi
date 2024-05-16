import { $authHost } from "./indexHttp.js";

export const fetchUserLikes = async () => {
    try {
        const { data } = await $authHost.get('/like');
        return data;
    } catch (error) {
        return error;
    }
};

export const fetchProducts = async (productIds) => {
    try {
        const { data } = await $authHost.get('/topiary', { params: { productIds } });
        return data;
    } catch (error) {
        return error;
    }
};

export const addToLike = async (productId) => {
    try {
        const { data } = await $authHost.post('/like/add', { productId });
        return data;
    } catch (error) {
        return error;
    }
};

export const removeToLike = async (productId, likeId) => {
    try {
        const { data } = await $authHost.post('/like/remove', { productId, likeId });
        return data;
    } catch (error) {
        return error;
    }
};
