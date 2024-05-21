import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import style_order from '../../css/order.module.css';
import { fetchUserOrders } from '../../http/orderApi';

export default function OrderBlock() {
    const [hasOrders, setHasOrders] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await fetchUserOrders();
                setHasOrders(fetchedOrders.length > 0);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className={style_order.orders}>
            <p className={style_order.order_main}>Заказы</p>
            <div className={style_order.main_info_order}>
                <p>Список заказов</p>
                <p>Купленные товары</p>
            </div>
            {hasOrders ? <OrderList /> : <p className={style_order.empty_order}>У вас пока нет заказов.</p>}
        </div>
    );
}
