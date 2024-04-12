import style_order from '../../css/order.module.css';
import ExtraMenuOrder from '../Extra_menu/ExtraMenuOrder';
import SubMainLine from '../Main/SubMainLine';
import OrderBlock from './OrderBlock';

export default function OrderMain() {
    return (
        <div className={style_order.main}>
            <SubMainLine />
            <div className={style_order.main_content}>
                <ExtraMenuOrder />
                <OrderBlock />
            </div>
        </div>
    );
}