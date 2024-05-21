import ApiError from '../error/ApiError.js';
import models from '../models/models.js';

const { Order, Order_topiary, Product, sequelize } = models;

export const OrderController = {
    getOrder: async (req, res) => {
        try {
            const userId = req.user.id;
            const orders = await Order.findAll({
                where: { userId },
                include: {
                    model: Order_topiary,
                    include: {
                        model: Product,
                        as: 'productInOrder',
                        attributes: ['id', 'name', 'price', 'price_default', 'img']
                    }
                }
            });
            res.json(orders);
        } catch (error) {
            console.error('Ошибка при получении заказов пользователя:', error);
            res.status(500).json({ message: 'Ошибка при получении заказов пользователя', error: error.message });
        }
    },

    addToOrder: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const userId = req.user.id;
            const { items, status, totalPrice, discount, date } = req.body;

            console.log('Request Body:', req.body);

            // Создание нового заказа в таблице orders
            const order = await Order.create({ userId }, { transaction });

            const orderTopiaries = items.map(item => ({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                status,
                totalPrice,
                discount,
                date,
                createdAt: new Date(),
                updatedAt: new Date()
            }));

            console.log('Order Topiaries:', orderTopiaries);

            await Order_topiary.bulkCreate(orderTopiaries, { transaction });

            await transaction.commit();
            res.status(201).json({ order });
        } catch (error) {
            await transaction.rollback();
            console.error('Ошибка при добавлении заказа:', error);
            console.error('Detailed error:', error); 
            res.status(500).json({ message: 'Ошибка при добавлении заказа', error: error.message });
        }
    },

    updateOrderStatus: async (req, res) => {
        try {
            const { orderTopiaryId, status } = req.body;
            const orderTopiary = await Order_topiary.findByPk(orderTopiaryId);
            if (!orderTopiary) {
                return res.status(404).json({ message: 'Товар заказа не найден' });
            }
            orderTopiary.status = status;
            await orderTopiary.save();
            res.json({ message: 'Статус заказа обновлён', orderTopiary });
        } catch (error) {
            console.error('Ошибка при обновлении статуса заказа:', error);
            res.status(500).json({ message: 'Ошибка при обновлении статуса заказа' });
        }
    },

    preparePayment: async (req, res) => {
        try {
            const userId = req.user.id;
            const userOrders = await Order.findAll({ where: { userId } });
            const paymentData = {
                userOrders,
            };
            res.json(paymentData);
        } catch (error) {
            console.error('Ошибка при подготовке данных для страницы оплаты:', error);
            res.status(500).json({ message: 'Ошибка при подготовке данных для страницы оплаты' });
        }
    }
};
