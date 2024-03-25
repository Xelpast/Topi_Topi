const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');
const jwt = require('jsonwebtoken');
const generateJwt = (id, login, role) => {
    return jwt.sign({id, login, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
}

class UserController {
    async registration(req, res, next) {
        const {login, password, role} = req.body;
        if(!login || !password) {
            return next(ApiError.badRequest("Неккоректный логин или пароль"));
        } 
        const candidate = await User.findOne({where: {login}});
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким логином уже существует"));
        } 
        const hashPassword = await bcrypt.hash(password, 4);
        const user = await User.create({login, role, password, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.login, user.role);
        return res.json({token});
    }

    async authorization(req, res, next) {
        const { login, password } = req.body;
        const user = await User.findOne({where: {login}});
        if(!user) {
            return next(ApiError.Internal("Пользователь с таким логином не найден"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.Internal("Указан неверный пароль"));
        }
        const token = generateJwt(user.id, user.login, user.role);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController();