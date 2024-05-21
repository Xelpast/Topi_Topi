import React from 'react';
import style_card_basket from '../../css/card_basket.module.css';
import { AXIOS_URL } from '../../http/indexHttp';

export default function OrderItemList({ order }) {
    return (
        <div className={style_card_basket.teas}>
            {order && order.order_topiaries && order.order_topiaries.map((item, index) => {
                const productOrder = item.productInOrder;
                return (
                    <div className={style_card_basket.main_card} key={index}>
                        <div className={style_card_basket.main_card_ring_order}>
                            <img src={AXIOS_URL + productOrder.img} alt={productOrder.img} />
                        </div>
                        <div className={style_card_basket.description_card_main}>
                            <div className={style_card_basket.description_card_price}>
                                <p className={style_card_basket.price_main}>{productOrder.price} ₽</p>
                                <p className={style_card_basket.price_default}>{productOrder.price_default} ₽</p>
                            </div>
                            <div className={style_card_basket.description_topi}>
                                <p>Топиарий "{productOrder.name}"</p>
                                <p><b>Количество: {item.quantity}</b></p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


