import basket from '../../img/basket.png';
import style_basket from '../../css/basket.module.css';
import Card_basket from '../Card/Card_basket';

export default function Baket_item() {
    return (
        <div className={style_basket.product_basket}>
            <Card_basket />
            <div className={style_basket.info_card_basket}>
                <p className={style_basket.text_info_basket}>Самовывоз: 4–14 марта <br />Доставка по клику: 8–16 марта</p>
                <div className={style_basket.btn_counter}>
                    <button className={style_basket.btn_counter_minus}>–</button>
                    <input type="text" value="1" className={style_basket.input_counter} readOnly />
                    <button className={style_basket.btn_counter_plus}>+</button>
                    <div className={style_basket.basket_img}>
                        <img src={basket} alt="" />
                    </div>
                </div>
                <p className={style_basket.similar_products}>Посмотреть похожие товары</p>
            </div>
        </div>
    );
}