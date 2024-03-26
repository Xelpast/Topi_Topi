import { Link } from 'react-router-dom';
import Card_basket from '../Card/Card_basket';
import style_order_pay from '../../css/order_pay.module.css';
import back from '../../img/back.png';
import pay from '../../img/pay.png';
import info from '../../img/info.png';
import Sub_main_line from '../Main/Sub_main_line';

export default function Order_pay_main() {
    return (
        <div className={style_order_pay.main}>
            <Sub_main_line />
            <div className={style_order_pay.orders}>
                <div className={style_order_pay.order_main}>
                    <p className={style_order_pay.placing_an_order}>Оформление заказа</p>
                    <p className={style_order_pay.help_text}>Помощь покупателю</p>
                </div>
                <div className={style_order_pay.region_and_btn}>
                    <p className={style_order_pay.region}>Ваш регион: Пензенская область</p>
                    <Link to="/basket"><button className={style_order_pay.btn_back_basket}><img src={back} alt="" className={style_order_pay.back_img} />Вернуться в корзину</button></Link>
                </div>
            </div>
            <div className={style_order_pay.main_info_order}>
                <div className={style_order_pay.main_order_choise}>
                    <p className={style_order_pay.method_of_obtaining}>Выберите способ получения</p>
                    <p>Доставка осуществляется нашем компаньоном GruZ's.</p>
                    <p>Самовывоз доступен благодря нашим партнёрам.</p>
                    <div className={style_order_pay.line_order}></div>
                    <div className={style_order_pay.option_order}>
                        <div className={style_order_pay.order_delivery_form}>
                            <div className={style_order_pay.content_order}>
                                <label className={style_order_pay.content_order_dop}>
                                    <input type="radio" name='order' value="delivery" />
                                    <span>Доставка курьером</span>
                                    <Link to="https://google.com"><img src={info} alt="" /></Link>
                                    <p>C 12 июня, 144 ₽</p>
                                </label>
                                <div className={style_order_pay.block_info_order}>Товары забирает курьер и везёт на указанный адрес. В течении 1-2 часов заказ будет у Вас.</div>
                            </div><br />
                        </div>
                        <div className={style_order_pay.order_pick_up_form}>
                            <div className={style_order_pay.content_order}>
                                <label className={style_order_pay.content_order_dop}>
                                    <input type="radio" name='order' value="pick_up" />
                                    <span>Самовывоз</span>
                                    <Link to="https://google.com"><img src={info} alt="" /></Link>
                                    <p>C 13 июня, 0 ₽</p>
                                </label>
                                <div className={style_order_pay.block_info_order}>Товары можно забрать в течение 7 дней, далее присутсвует возможность продлить срок хранения на 3 дня.</div>
                            </div><br />
                        </div>
                    </div>
                    <div className={style_order_pay.order_form}>
                        <p className={style_order_pay.address}>Адрес доставки</p>
                        <div className={style_order_pay.address_and_topi}>
                            <form action="">
                                <div className={style_order_pay.order_form_list}>
                                    <div className={style_order_pay.order_form_dop_list}>
                                        <div>
                                            <p>Подъезд</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Этаж</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Квартира</p>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <p>Домофон</p>
                                            <input type="text" />
                                        </div>

                                        <div className={style_order_pay.order_textarea}>
                                            <p>Комментарий курьеру</p>
                                            <textarea type="text" placeholder="Пожалуйста оставьте коробку у двери дома..." />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className={style_order_pay.order_card}>
                                <Card_basket />
                                <Card_basket />
                                <Card_basket />
                            </div>
                            <div className={style_order_pay.promo_and_pay}>
                                <div className={style_order_pay.order_poromocodes_main}>
                                    <p className={style_order_pay.promocode_text}>Промокод</p>
                                    <div className={style_order_pay.order_promocodes}>
                                        <input type="text" placeholder="Введите промокод" />
                                        <p>Применить</p>
                                    </div>
                                </div>
                                <div className={style_order_pay.content_pay_main}>
                                    <p className={style_order_pay.pay_mathod}>Способ оплаты</p>
                                    <div className={style_order_pay.content_pay}>
                                        <label className={style_order_pay.content_pay_dop}>
                                            <input type="radio" name='pay' value="card" />
                                            <span>Банковской картой</span>
                                        </label>
                                        <label className={style_order_pay.content_pay_dop}>
                                            <input type="radio" name='pay' value="cash" />
                                            <span>Наличными</span>
                                        </label>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style_order_pay.product_price}>
                    <div className={style_order_pay.order_form_pay}>
                        <div className={style_order_pay.order_form_text}>
                            <p className={style_order_pay.order_text}>Заказ</p>
                            <p>3 товара 6кг.</p>
                            <p>Доставка: 0 ₽</p>
                            <p>Скидка: –3 691 ₽</p>
                            <p className={style_order_pay.total}>Итого: 13 114 ₽</p>
                        </div>
                        <button className={style_order_pay.btn_pay}> <img src={pay} alt="" />Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}