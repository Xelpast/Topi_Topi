import { Router } from "express"
import { TopiaryController } from '../controllers/TopiaryController.js'

export const topiaryRouter = Router();

topiaryRouter.post('/', TopiaryController.create);
topiaryRouter.get('/', TopiaryController.getAll);
topiaryRouter.get('/:id', TopiaryController.getOne);
