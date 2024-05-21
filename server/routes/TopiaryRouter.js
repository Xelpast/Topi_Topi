import { Router } from "express"
import { TopiaryController } from '../controllers/TopiaryController.js'

export const topiaryRouter = Router();

topiaryRouter.post('/', TopiaryController.create);
topiaryRouter.post('/:topiaryId', TopiaryController.createInfo);
topiaryRouter.get('/', TopiaryController.getAll);
topiaryRouter.get('/latest', TopiaryController.getLatestProducts);
topiaryRouter.get('/:id', TopiaryController.getOne);
topiaryRouter.put('/:id', TopiaryController.update);
topiaryRouter.delete('/:id', TopiaryController.delete);
