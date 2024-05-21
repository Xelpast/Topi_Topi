import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { OrderController } from '../controllers/OrderController.js';

export const orderRouter = Router();

orderRouter.get('/', authMiddleware, OrderController.getOrder);
orderRouter.get('/payment', authMiddleware, OrderController.preparePayment);
orderRouter.post('/add', authMiddleware, OrderController.addToOrder);
orderRouter.patch('/updateStatus', authMiddleware, OrderController.updateOrderStatus);