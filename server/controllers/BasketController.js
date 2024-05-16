import ApiError from '../error/ApiError.js';
import models from '../models/models.js';

const { Basket, Basket_topiary } = models;

export const BasketController = {
    getBasket: async (req, res, next) => {
        try {
            const userId = req.user.id; 
            const basket = await Basket.findOne({ where: { userId }, include: Basket_topiary });
            if (!basket) {
                return res.json({ message: "Корзина пуста" });
            }
            return res.json(basket);
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при получении корзины", error));
        }
    },

    addToBasket: async (req, res, next) => {
        const { productId } = req.body;
        const userId = req.user.id; // получаем идентификатор пользователя из запроса
    
        try {
            // Находим корзину пользователя
            let basket = await Basket.findOne({ where: { userId }, include: Basket_topiary });
    
            if (!basket) {
                // Если корзина пользователя не найдена, создаем новую корзину
                basket = await Basket.create({ userId });
            }
    
            // Проверяем, есть ли уже товар с таким productId в корзине
            let existingProduct = await Basket_topiary.findOne({ where: { basketId: basket.id, productId } });
    
            if (existingProduct) {
                // Если товар уже есть в корзине, увеличиваем количество на 1
                await existingProduct.increment('quantity');
            } else {
                // Если товара нет в корзине, добавляем его с начальным количеством 1
                existingProduct = await Basket_topiary.create({ productId, basketId: basket.id, quantity: 1 });
            }
    
            // Обновляем состояние корзины пользователя в базе данных
            basket = await Basket.findOne({ where: { userId }, include: Basket_topiary });
    
            return res.status(201).json({ message: 'Товар успешно добавлен в корзину', basket });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при добавлении товара в корзину", error));
        }
    },

    removeFromBasket: async (req, res, next) => {
        try {
            const { productId } = req.body;
            const userId = req.user.id;
            // Находим запись о товаре в корзине
            let basketItem = await Basket_topiary.findOne({ where: { basketId: userId, productId } });
    
            if (basketItem) {
                // Уменьшаем количество товара на 1
                await basketItem.decrement('quantity');
    
                // Если количество достигло нуля, удаляем запись из таблицы
                if (basketItem.quantity === 0) {
                    await basketItem.destroy();
                }
            }
    
            return res.json({ message: "Товар успешно удален из корзины" });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при удалении товара из корзины", error));
        }
    },

    clearBasket: async (req, res, next) => {
        try {
            const userId = req.user.id;
            // Проверки, например, наличия пользователя и корзины
            await Basket_topiary.destroy({ where: { basketId: userId } });
            return res.json({ message: "Корзина успешно очищена" });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при очистке корзины", error));
        }
    }
};