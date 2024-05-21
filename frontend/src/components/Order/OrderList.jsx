import React, { useEffect, useState } from 'react';
import status from '../../img/status.png';
import style_order from '../../css/order.module.css';
import OrderItemList from './OrderItemList'; // Используем компонент OrderItemList
import { fetchUserOrders } from '../../http/orderApi';

export default function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await fetchUserOrders();
                setOrders(fetchedOrders);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
        };

        fetchOrders();
    }, []);

    // Функция для вычисления даты окончания заказа через 7 дней
    const calculateEndDate = (startDate) => {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
        return endDate.toLocaleDateString();
    };

    return (
        <>
            {orders && orders.map((order, orderIndex) => (
                <div className={style_order.orders_contents} key={orderIndex}>
                    <div className={style_order.content_in_order}>
                        <div className={style_order.contents_img}>
                            <div className={style_order.content_text}>
                                <p className={style_order.order_data}>Заказ от {new Date(order.createdAt).toLocaleDateString()}</p>
                                <div className={style_order.status}>
                                    <img src={status} alt="status" />
                                    <p>Статус: {order.status}</p>
                                </div>
                                <div className={style_order.text_order}>
                                    <p className={style_order.number_order_text}>Номер доставки: {1000000 + order.id} </p>
                                    <p>Самовывоз из магазина</p>
                                    {/* Используем вычисленную дату окончания заказа */}
                                    <p className={style_order.date_order_text}>С {new Date(order.createdAt).toLocaleDateString()} по {calculateEndDate(order.createdAt)}</p>
                                    <div className={style_order.number_order}>
                                        <p>Номер для получения: {100 + "-" + 4 + order.id + "-" + 22}</p>
                                        <p>Возьмите с собой паспорт!</p>
                                    </div>
                                </div>
                            </div>
                            <OrderItemList order={order} />
                        </div>
                        <div className={style_order.footer_text_order}>
                            <p>Повторить заказ</p>
                            <p>Что-то не так?</p>
                            <p>Подробнее о заказе</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
