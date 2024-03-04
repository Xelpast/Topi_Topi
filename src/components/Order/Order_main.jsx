import style_order from '../../css/order.module.css';
import back from '../../img/back.png';

export default function Order_main() {
    return (
        <div className={style_order.main}>
            <div className={style_order.orders}>
                <div className={style_order.order_main}>
                    <p className={style_order.placing_an_order}>Оформление заказа</p>
                    <p className={style_order.help_text}>Помощь покупателю</p>
                </div>
                <div className={style_order.region_and_btn}>
                    <p className={style_order.region}>Ваш регион: Пензенская область</p>
                    <button className={style_order.btn_back_basket}><img src={back} alt="" className={style_order.back_img} />Вернуться в корзину</button>
                </div>
                <div className={style_order.main_info_order}>

                </div>
            </div>
        </div>
    );
}