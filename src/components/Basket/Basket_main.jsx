import { Link } from 'react-router-dom';
import style_basket from '../../css/basket.module.css';
import Extra_menu_basket from '../Extra_menu/Extra_menu_basket';
import Baket_item from './Basket_item';
import Sub_main_line from '../Main/Sub_main_line';

export default function Basket_main() {
    return (
        <div className={style_basket.main}>
            <Sub_main_line />
            <div className={style_basket.main_content}>
                <Extra_menu_basket />
                <div className={style_basket.baskets}>
                    <p className={style_basket.basket_main}>Корзина</p>
                    <div className={style_basket.main_info_basket}>
                        <p>Список товаров</p>
                        <p>Подарочные товары</p>
                    </div>
                    <div className={style_basket.main_card_basket}>
                        <div className={style_basket.card_basket}>
                            <p>Доставка курьером или в пункт выдачи</p>
                            <div className={style_basket.text_choose_all}>
                                <label>
                                    <input type="checkbox" className={style_basket.main_checkbox} />
                                    <p className={style_basket.custom_checkbox}></p>
                                    Выбрать всё
                                </label>
                            </div>
                            <Baket_item />
                            <Baket_item />
                        </div>
                        <div className={style_basket.product_price}>
                            <p>3 товара 6кг.</p>
                            <div className={style_basket.saving}>
                                <p>Экономия: <b>–3 691 ₽</b></p>
                            </div>
                            <p className={style_basket.preliminary_price}>Предварительная цена: <b>12 970 ₽</b></p>
                            <Link to="/order-pay"><button className={style_basket.btn_basket}>Оформить заказ</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}