require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index_router');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const app_exp = express();
app_exp.use(cors());
app_exp.use(express.json());
app_exp.use(express.static(path.resolve(__dirname, 'static')));
app_exp.use(fileUpload({}));
app_exp.use('/api', router);

//Обработка middleware должна проходить в конце
app_exp.use(errorHandler);

const models = require('./models/models');

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app_exp.listen(PORT, () => console.log(`SERVER started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();