import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style_basket from '../../css/basket.module.css';
import ExtraMenuBasket from '../Extra_menu/ExtraMenuBasket';
import BasketItem from './BasketItem';
import SubMainLine from '../Main/SubMainLine';
import { scrollToTop } from '../../utils/const';
import { observer } from 'mobx-react';
import { BasketContext } from '../../context/BasketContext';

const BasketMain = observer(() => {
    const { basketCount, totalPrice, totalSavings } = useContext(BasketContext);
    console.log('Total Price:', totalPrice);
    console.log('Total Savings:', totalSavings);

    return (
        <div className={style_basket.main}>
            <SubMainLine />
            <div className={style_basket.main_content}>
                <ExtraMenuBasket />
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
                            <BasketItem />
                        </div>
                        <div className={style_basket.product_price}>
                            <p>{basketCount} товара(ов)</p>
                            <div className={style_basket.saving}>
                                <p>Экономия: <b>{totalSavings > 0 ? `-${totalSavings} ₽` : `${totalSavings} ₽`}</b></p>
                            </div>
                            <p className={style_basket.preliminary_price}>Предварительная цена: <b>{totalPrice} ₽</b></p>
                            <Link to="/order-pay" onClick={scrollToTop}><button className={style_basket.btn_basket}>Оформить заказ</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default BasketMain;
