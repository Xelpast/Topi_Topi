import { Router } from 'express';
import { BasketController } from '../controllers/BasketController.js';
import authMiddleware from '../middleware/authMiddleware.js';

export const basketRouter = Router();

basketRouter.get('/', authMiddleware, BasketController.getBasket);
basketRouter.post('/add', authMiddleware, BasketController.addToBasket);
basketRouter.post('/remove', authMiddleware, BasketController.removeFromBasket);
basketRouter.delete('/clear', authMiddleware, BasketController.clearBasket);
basketRouter.put('/update', authMiddleware, BasketController.updateBasketProductQuantity);