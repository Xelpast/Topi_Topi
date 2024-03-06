import style_order from '../../css/order.module.css';
import Extra_menu_order from '../Extra_menu/Extra_menu_order';
import Order_block from './Order_block';

export default function Orders_main() {
    return (
        <div className={style_order.main}>
            <Extra_menu_order />
            <Order_block />
        </div>
    );
}