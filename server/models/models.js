const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nickname: { type: DataTypes.STRING },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Basket_topiary = sequelize.define('basket_topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Topiary = sequelize.define('topiary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    price_default: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
})

const Hits = sequelize.define('hits', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }
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

User.hasMany(Rating);
Rating.belongsTo(User);

//basket connection

Basket.hasMany(Basket_topiary);
Basket_topiary.belongsTo(Basket);

//hits and category connection

Hits.hasMany(Topiary);
Topiary.belongsTo(Hits);

Category.hasMany(Topiary);
Topiary.belongsTo(Category);

Hits.belongsToMany(Category, { through: Hits_category });
Category.belongsToMany(Hits, { through: Hits_category });

//topiary connection

Topiary.hasMany(Rating);
Rating.belongsTo(Topiary);

Topiary.hasMany(Basket_topiary);
Basket_topiary.belongsTo(Topiary);

Topiary.hasMany(Topiary_info, { as: 'info' });
Topiary_info.belongsTo(Topiary);

module.exports = {
    User,
    Basket,
    Basket_topiary,
    Topiary,
    Topiary_info,
    Hits,
    Category,
    Rating,
    Hits_category
}