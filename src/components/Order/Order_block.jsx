import Order_list from './Order_list';
import style_order from '../../css/order.module.css';

export default function Order_block() {
    return (
        <div className={style_order.orders}>
            <p className={style_order.order_main}>Заказы</p>
            <div className={style_order.main_info_order}>
                <p>Список заказов</p>
                <p>Купленные товары</p>
            </div>
           <Order_list />
           <Order_list />
        </div>
    );
}
