import ApiError from '../error/ApiError.js';
import bcrypt from 'bcrypt';
import models from '../models/models.js';
import jwt from 'jsonwebtoken';

const generateJwt = (id, login, role) => {
    return jwt.sign({ id, login, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

const { User, Basket } = models;

export const UserController = {
    registration: async (req, res, next) => {
        const { login, password, role } = req.body;
        if (!login || !password) {
            return next(ApiError.badRequest("Некорректный логин или пароль"));
        }
        try {
            const candidate = await User.findOne({ where: { login } });
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким логином уже существует"));
            }
            const hashPassword = await bcrypt.hash(password, 4);
            const user = await User.create({ login, role, password: hashPassword });
            await Basket.create({ userId: user.id });
            const token = generateJwt(user.id, user.login, user.role);
            return res.json({ user, token });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка регистрации пользователя", error));
        }
    },

    authorization: async (req, res, next) => {
        const { login, password } = req.body;
        try {
            const user = await User.findOne({ where: { login } });
            if (!user) {
                return next(ApiError.internalServerError("Пользователь с таким логином не найден"));
            }
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.internalServerError("Указан неверный пароль"));
            }
            const token = generateJwt(user.id, user.login, user.role);
            return res.json({ user, token });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка авторизации", error));
        }
    },

    check: async (req, res) => {
        try {
            const token = generateJwt(req.user.id, req.user.login, req.user.role);
            return res.json({ token });
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка проверки", error));
        }
    },

    getUserData: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const userData = await User.findByPk(userId);
            if (!userData) {
                return next(ApiError.notFound("Пользователь не найден"));
            }
            res.json(userData);
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка получения данных о пользователе", error));
        }
    },

    checkLogin: async (req, res, next) => {
        const { login } = req.body;
        try {
            const existingUser = await User.findOne({ where: { login } });
            if (existingUser) {
                return res.json({ isUnique: false });
            } else {
                return res.json({ isUnique: true });
            }
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при проверке уникальности логина", error));
        }
    },

    updateUserData: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const { name, surname, patronymic, gender, yearOfBirth, number, email } = req.body;

            const updatedUserData = await User.update({
                name,
                surname,
                patronymic,
                gender,
                year_of_birth: yearOfBirth,
                number,
                email
            }, {
                where: { id: userId }
            });

            if (updatedUserData[0] === 0) {
                return next(ApiError.notFound("Пользователь не найден"));
            }

            const userData = await User.findByPk(userId);
            res.json(userData);
        } catch (error) {
            return next(ApiError.internalServerError("Ошибка при обновлении данных пользователя", error));
        }
    }
};
