import ApiError from '../error/ApiError.js';
import models from '../models/models.js';

const { Basket, Basket_topiary } = models;

export const BasketController = {
    getBasket: async (req, res, next) => {
        try {
            const userId = req.user.id; // Предполагается, что пользователь авторизован
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
        const { productId, basketId } = req.body;
        
        try {
            await Basket_topiary.create({ 
                productId: productId, 
                basketId: basketId,
            });
    
            return res.status(201).json({ message: 'Товар успешно добавлен в корзину' });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при добавлении товара в корзину", error));
        }
    },

    removeFromBasket: async (req, res, next) => {
        try {
            const { userId, productId } = req.body;
            // Проверки, например, наличия пользователя и товара в корзине
            await Basket_topiary.destroy({ where: { basketId: userId, productId } });
            return res.json({ message: "Товар успешно удален из корзины" });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при удалении товара из корзины", error));
        }
    },

    // Другие методы, например, для изменения количества товара и оформления заказа, могут быть добавлены по аналогии с вышеуказанными методами.
};