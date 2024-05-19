import ApiError from '../error/ApiError.js';
import models from '../models/models.js';

const { Basket, Basket_topiary } = models;

export const BasketController = {
    getBasket: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const baskets = await Basket.findAll({
                where: { userId },
                include: {
                    model: Basket_topiary,
                    attributes: ['productId', 'quantity']
                }
            });
    
            return res.json(baskets);
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при получении товаров в корзине", error));
        }
    },

    addToBasket: async (req, res, next) => {
        const { productId } = req.body;
        const userId = req.user.id; 
    
        try {
            let basket = await Basket.findOne({ where: { userId }, include: Basket_topiary });
    
            if (!basket) {
                basket = await Basket.create({ userId });
            }
    
            let existingProduct = await Basket_topiary.findOne({ where: { basketId: basket.id, productId } });
    
            if (existingProduct) {
                await existingProduct.increment('quantity');
            } else {
                existingProduct = await Basket_topiary.create({ productId, basketId: basket.id, quantity: 1 });
            }
    
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
    
            // Находим все экземпляры товара в корзине пользователя
            const basketItems = await Basket_topiary.findAll({ where: { basketId: userId, productId } });
    
            // Удаляем все найденные экземпляры товара из корзины
            await Promise.all(basketItems.map(async (item) => {
                await item.destroy();
            }));
    
            return res.json({ message: "Товар успешно удален из корзины" });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при удалении товара из корзины", error));
        }
    },

    clearBasket: async (req, res, next) => {
        try {
            const userId = req.user.id;
            await Basket_topiary.destroy({ where: { basketId: userId } });
            return res.json({ message: "Корзина успешно очищена" });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при очистке корзины", error));
        }
    },

    updateBasketProductQuantity: async (req, res, next) => {
        try {
            const { productId, quantity } = req.body;
            const userId = req.user.id;

            const basket = await Basket.findOne({ where: { userId } });
            if (!basket) {
                return next(ApiError.notFound('Корзина пользователя не найдена'));
            }

            let basketItem = await Basket_topiary.findOne({ where: { basketId: basket.id, productId } });
            if (!basketItem) {
                return next(ApiError.notFound('Товар не найден в корзине'));
            }

            await basketItem.update({ quantity });

            return res.json({ message: "Количество товара в корзине обновлено", basketItem });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при обновлении количества товара в корзине", error));
        }
    }
};