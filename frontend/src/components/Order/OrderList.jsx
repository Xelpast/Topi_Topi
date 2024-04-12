import status from '../../img/status.png';
import CardOrder from '../Card/CardOrder';
import style_order from '../../css/order.module.css';

export default function OrderList() {
    return (
        <div className={style_order.orders_contents}>
            <div className={style_order.content_in_order}>
                <div className={style_order.contents_img}>
                    <div className={style_order.content_text}>
                        <p className={style_order.order_data}>Заказ от 7 июня</p>
                        <div className={style_order.status}>
                            <img src={status} alt="status" />
                            <p>Статус: получен</p>
                        </div>
                        <div className={style_order.text_order}>
                            <p className={style_order.number_order_text}>Номер доставки: 134-444-28 </p>
                            <p>Самовывоз из магазина</p>
                            <p className={style_order.date_order_text}>С 8:00 до 23:00 по 21 декабря</p>
                            <div className={style_order.number_order}>
                                <p>Номер для получения: D_424 30 92</p>
                                <p>Возьмите с собой паспорт!</p>
                            </div>
                        </div>
                    </div>
                    <CardOrder />
                </div>
                <div className={style_order.footer_text_order}>
                    <p>Повторить заказ</p>
                    <p>Что-то не так?</p>
                    <p>Подробнее о заказе</p>
                </div>
            </div>
        </div>
    );
}