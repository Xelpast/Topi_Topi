import express from 'express';
import dotenv from 'dotenv';
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

dotenv.config();
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

//Обработка middleware должна проходить в конце
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(SETTINGS.PORT, () => console.log(`SERVER started on PORT: ${SETTINGS.PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();