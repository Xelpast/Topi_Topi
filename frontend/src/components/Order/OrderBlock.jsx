import OrderList from './OrderList';
import style_order from '../../css/order.module.css';

export default function OrderBlock() {
    return (
        <div className={style_order.orders}>
            <p className={style_order.order_main}>Заказы</p>
            <div className={style_order.main_info_order}>
                <p>Список заказов</p>
                <p>Купленные товары</p>
            </div>
           <OrderList />
           <OrderList />
        </div>
    );
}
