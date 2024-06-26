import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import style_card_basket from '../../css/card_basket.module.css';

export default function CardBasket({ item }) {
    const [ImageLike, setImageLike] = useState(true);
    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={style_card_basket.main_card}>
            <div className={style_card_basket.main_card_ring}>
                <img
                    className={style_card_basket.like_img}
                    src={ImageLike ? like_red : like}
                    alt="IconLike"
                    onClick={ImageSwitch}
                />
                <img className={style_card_basket.main_img} src={item.image} alt={item.name} />
            </div>
            <div className={style_card_basket.description_card_main}>
                <div className={style_card_basket.description_card_price}>
                    <p className={style_card_basket.price_main}>{item.price} ₽</p>
                    {item.originalPrice && <p className={style_card_basket.price_default}><s>{item.originalPrice} ₽</s></p>}
                </div>
                <div className={style_card_basket.description_topi}>
                    <p>{item.name}</p>
                </div>
            </div>
        </div>
    );
}