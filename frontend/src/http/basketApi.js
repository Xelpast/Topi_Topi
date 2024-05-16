import { $authHost } from "./indexHttp.js";

// Получение списка товаров в корзине пользователя
export const fetchUserCart = async () => {
    try {
        const { data } = await $authHost.get('/basket');
        return data;
    } catch (error) {
        return error;
    }
};

// Добавление товара в корзину
export const addToBasket = async (productId, basketId) => {
    try {
        const { data } = await $authHost.post('/basket/add', { productId, basketId});
        return data;
    } catch (error) {
        return error;
    }
};

// Удаление товара из корзины
export const removeFromCart = async (productId, basketId) => {
    try {
        const { data } = await $authHost.post('/basket/remove', { productId, basketId });
        return data;
    } catch (error) {
        return error;
    }
};

// Очистка корзины пользователя
export const clearUserCart = async () => {
    try {
        const { data } = await $authHost.delete('/basket/clear');
        return data;
    } catch (error) {
        return error;
    }
};