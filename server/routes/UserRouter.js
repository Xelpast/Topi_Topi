import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js';

export const userRouter = Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/authorization', UserController.authorization);
userRouter.post('/checkLogin', UserController.checkLogin);
userRouter.get('/auth', authMiddleware, UserController.check);
userRouter.get('/profile', authMiddleware, UserController.getUserData);