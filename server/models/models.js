import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

// Define models
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
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
});

const Like = sequelize.define('like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Like_topiary = sequelize.define('like_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.ENUM, values: ['Ожидание', 'В пути', 'Доставлен', 'Отменён'], defaultValue: 'Ожидание' }
});

const Order_topiary = sequelize.define('order_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    totalPrice: { type: DataTypes.FLOAT, allowNull: false },
    discount: { type: DataTypes.FLOAT, allowNull: true },
    date: { type: DataTypes.DATE, allowNull: false }
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

// Associations
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

Order.hasMany(Order_topiary, { foreignKey: 'orderId' });
Order_topiary.belongsTo(Order, { foreignKey: 'orderId', as: 'associatedOrder' }); // Updated alias

Product.hasMany(Basket_topiary, { foreignKey: 'productId', as: 'productInBasket' }); // Updated alias
Basket_topiary.belongsTo(Product, { foreignKey: 'productId', as: 'productInBasket' }); // Updated alias

Product.hasMany(Like_topiary, { foreignKey: 'productId', as: 'productInLike' }); // Updated alias
Like_topiary.belongsTo(Product, { foreignKey: 'productId', as: 'productInLike' }); // Updated alias

Product.hasMany(Order_topiary, { foreignKey: 'productId', as: 'productInOrder' }); // Updated alias
Order_topiary.belongsTo(Product, { foreignKey: 'productId', as: 'productInOrder' }); // Updated alias

Product.hasMany(Topiary_info, { as: 'info' });
Topiary_info.belongsTo(Product);

const models = { User, Basket, Basket_topiary, Product, Topiary_info, Like, Like_topiary, Order, Order_topiary, sequelize };

// Invoke associations
Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

export default models;
