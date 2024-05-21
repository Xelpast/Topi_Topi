import { $authHost } from "./indexHttp.js";

// Функция для получения заказов пользователя
export const fetchUserOrders = async () => {
    try {
        const { data } = await $authHost.get('/order');
        return data;
    } catch (error) {
        return error;
    }
};

// Функция для добавления нового заказа
export const createOrder = async (orderData) => {
    try {
        const { data } = await $authHost.post('/order/add', orderData);
        return data;
    } catch (error) {
        return error;
    }
};

// Функция для обновления статуса заказа
export const updateOrderStatus = async (orderTopiaryId, status) => {
    try {
        const { data } = await $authHost.patch('/order/updateStatus', { orderTopiaryId, status });
        return data;
    } catch (error) {
        return error;
    }
};

export const fetchPaymentData = async () => {
    try {
        const { data } = await $authHost.get('/order/payment');
        return data;
    } catch (error) {
        return error;
    }
};