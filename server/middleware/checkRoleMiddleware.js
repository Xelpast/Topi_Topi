import jwt from 'jsonwebtoken';

export default function checkRole(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer token
            if (!token) {
                res.status(401).json({ message: "Пользователь не авторизован" });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                res.status(403).json({ message: "У вас нет доступа" });
            }
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: "Пользователь не авторизован" });
        }
    }
}
