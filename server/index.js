import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import nocache from 'nocache';
import { SETTINGS } from './settings.js'
import { sequelize } from './db.js';
import { topiaryRouter } from './routes/TopiaryRouter.js';
import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';
import { errorHandler } from './middleware/ErrorHandlingMiddleware.js';
import { userRouter } from "./routes/UserRouter.js";
import { basketRouter } from './routes/BasketRouter.js';
import path, {dirname} from 'path';
import cors from 'cors';
import { likeRouter } from './routes/LikeRouter.js';
import { orderRouter } from './routes/OrderRouter.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(nocache());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(SETTINGS.PATH.TOPIARY, topiaryRouter);
app.use(SETTINGS.PATH.USER, userRouter);
app.use(SETTINGS.PATH.BASKET, basketRouter);
app.use(SETTINGS.PATH.LIKE, likeRouter);
app.use(SETTINGS.PATH.ORDER, orderRouter);

//Обработка middleware должна проходить в конце
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        app.listen(SETTINGS.PORT, () => console.log(`SERVER started on PORT: ${SETTINGS.PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();