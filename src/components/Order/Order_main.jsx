import style_order from '../../css/order.module.css';
import Extra_menu_order from '../Extra_menu/Extra_menu_order';
import Sub_main_line from '../Main/Sub_main_line';
import Order_block from './Order_block';

export default function Orders_main() {
    return (
        <div className={style_order.main}>
            <Sub_main_line />
            <div className={style_order.main_content}>
                <Extra_menu_order />
                <Order_block />
            </div>
        </div>
    );
}