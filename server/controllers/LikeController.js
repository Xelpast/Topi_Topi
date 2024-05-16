import ApiError from '../error/ApiError.js';
import models from '../models/models.js';

const { Like, Like_topiary } = models;

export const LikeController = {
    getLike: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const likes = await Like.findAll({
                where: { userId },
                include: {
                    model: Like_topiary,
                    attributes: ['productId']
                }
            });
    
            return res.json(likes);
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при получении избранных товаров", error));
        }
    },

    addToLike: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const { productId } = req.body;
    
            let [like, created] = await Like.findOrCreate({ where: { userId } });
    
            if (!created) {
                const existingLike = await Like_topiary.findOne({ where: { likeId: like.id, productId } });
                if (existingLike) {
                    return res.status(400).json({ message: 'Товар уже добавлен в избранное' });
                }
            }
    
            await Like_topiary.create({ likeId: like.id, productId });
    
            return res.status(201).json({ message: 'Товар успешно добавлен в избранное' });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при добавлении товара в избранное", error));
        }
    },

    removeFromLike: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const { productId } = req.body;

            const like = await Like.findOne({ where: { userId } });
            if (!like) {
                return res.status(404).json({ message: 'Запись о пользователе не найдена' });
            }

            await Like_topiary.destroy({ where: { likeId: like.id, productId } });
            return res.status(200).json({ message: 'Товар успешно удален из избранного' });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при удалении товара из избранного", error));
        }
    }
};