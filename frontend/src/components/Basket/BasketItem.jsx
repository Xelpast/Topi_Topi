import basket from '../../img/basket.png';
import style_basket from '../../css/basket.module.css';
import CardBasket from '../Card/CardBasket';

export default function BasketItem() {
    return (
        <div className={style_basket.product_basket}>
            <CardBasket />
            <div className={style_basket.info_card_basket}>
                <p className={style_basket.text_info_basket}>Самовывоз: 4–14 марта <br />Доставка по клику: 8–16 марта</p>
                <div className={style_basket.btn_counter}>
                    <button className={style_basket.btn_counter_minus}>–</button>
                    <input type="text" value="1" className={style_basket.input_counter} readOnly />
                    <button className={style_basket.btn_counter_plus}>+</button>
                    <div className={style_basket.basket_img}>
                        <img src={basket} alt="basket" />
                    </div>
                </div>
                <p className={style_basket.similar_products}>Посмотреть похожие товары</p>
            </div>
        </div>
    );
}