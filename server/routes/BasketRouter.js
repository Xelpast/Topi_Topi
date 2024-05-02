import { Router } from 'express';
import { BasketController } from '../controllers/BasketController.js';
import authMiddleware from '../middleware/authMiddleware.js';

export const basketRouter = Router();

basketRouter.post('/add', authMiddleware, BasketController.addToBasket);