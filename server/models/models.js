const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Basket_topiary = sequelize.define('basket_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    price_default: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Hits = sequelize.define('hits', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Topiary_info = sequelize.define('topiary_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

const Hits_category = sequelize.define('hits_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

//user connection

User.hasOne(Basket);
Basket.belongsTo(User);

//basket connection

Basket.hasMany(Basket_topiary);
Basket_topiary.belongsTo(Basket);

//hits and category connection

Hits.hasMany(Product);
Product.belongsTo(Hits);

Category.hasMany(Product);
Product.belongsTo(Category);

Hits.belongsToMany(Category, { through: Hits_category });
Category.belongsToMany(Hits, { through: Hits_category });

//topiary connection

Product.hasMany(Basket_topiary);
Basket_topiary.belongsTo(Product);

Product.hasMany(Topiary_info, {as: 'info'});
Topiary_info.belongsTo(Product);

module.exports = {
    User,
    Basket,
    Basket_topiary,
    Product,
    Topiary_info,
    Hits,
    Category,
    Hits_category
}