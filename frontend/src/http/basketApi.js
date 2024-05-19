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

export const fetchProductById = async (productIds) => {
    try {
        const { data } = await $authHost.get('/topiary', { params: { productIds } });
        return data;
    } catch (error) {
        console.error('Ошибка при получении информации о продукте:', error);
        throw error;
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

export const updateBasketProductQuantity = async (productId, quantity) => {
    try {
        const { data } = await $authHost.put('/basket/update', { productId, quantity });
        return data;
    } catch (error) {
        console.error('Ошибка при обновлении количества товара в корзине:', error);
        throw error;
    }
};