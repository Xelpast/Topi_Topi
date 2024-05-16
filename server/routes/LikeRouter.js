import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { LikeController } from '../controllers/LikeController.js';

export const likeRouter = Router();

likeRouter.post('/add', authMiddleware, LikeController.addToLike);
likeRouter.post('/remove', authMiddleware, LikeController.removeFromLike);
likeRouter.get('/', authMiddleware, LikeController.getLike);