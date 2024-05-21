import React from 'react';
import style_card_order from '../../css/card_order.module.css';
import { AXIOS_URL } from '../../http/indexHttp';

const CardOrder = ({ products, basketItems }) => {
    return (
        <div className={style_card_order.block_card_pay}>
            {products.length > 0 ? (
                products.map((product, index) => {
                    // Find the corresponding basket item for this product
                    const basketItem = basketItems.find(item => item.productId === product.id);
                    const quantity = basketItem ? basketItem.quantity : 0;

                    return (
                        <div key={index} className={style_card_order.main_card}>
                            <div className={style_card_order.main_card_ring}>
                                <img className={style_card_order.main_img} src={AXIOS_URL + product.img} alt="Product" />
                            </div>
                            <div className={style_card_order.description_card_main}>
                                <div className={style_card_order.description_card_price}>
                                    <p className={style_card_order.price_main}>{product.price} ₽</p>
                                    <p className={style_card_order.price_default}><s>{product.price_default} ₽</s></p>
                                </div>
                                <div className={style_card_order.description_topi}>
                                    <p>{product.name}</p>
                                    <p>Количество: {quantity}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No items in basket</p>
            )}
        </div>
    );
};

export default CardOrder;
