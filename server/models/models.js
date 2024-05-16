import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    year_of_birth: { type: DataTypes.STRING },
    number: { type: DataTypes.CHAR(12) },
    email: { type: DataTypes.STRING }
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Basket_topiary = sequelize.define('basket_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Like = sequelize.define('like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Like_topiary = sequelize.define('like_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Order_topiary = sequelize.define('order_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    price_default: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
});

const Topiary_info = sequelize.define('topiary_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    manufacturer: { type: DataTypes.STRING, allowNull: false },
    material: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.STRING, allowNull: false },
    weight: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false }
});

// Связи
User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Like);
Like.belongsTo(User);

User.hasOne(Order);
Order.belongsTo(User);

Basket.hasMany(Basket_topiary, { foreignKey: 'basketId' });
Basket_topiary.belongsTo(Basket, { foreignKey: 'basketId' });

Like.hasMany(Like_topiary, { foreignKey: 'likeId' });
Like_topiary.belongsTo(Like, { foreignKey: 'likeId' });

Order.hasMany(Order_topiary);
Order_topiary.belongsTo(Order);

Product.hasMany(Basket_topiary);
Basket_topiary.belongsTo(Product);

Product.hasMany(Like_topiary);
Like_topiary.belongsTo(Product);

Product.hasMany(Order_topiary);
Order_topiary.belongsTo(Product);

Product.hasMany(Topiary_info, { as: 'info' });
Topiary_info.belongsTo(Product);

export default { User, Basket, Basket_topiary, Product, Topiary_info, Like, Like_topiary, Order, Order_topiary, sequelize };