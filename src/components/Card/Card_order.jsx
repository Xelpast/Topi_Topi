import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import style_card_order from '../../css/card_order.module.css';

export default function Card_order() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={style_card_order.main_card}>
            <div className={style_card_order.main_card_ring}>
                <img
                    className={style_card_order.like_img}
                    src={ImageLike ? like_red : like}
                    alt=""
                    onClick={ImageSwitch}
                />
                <img className={style_card_order.main_img} src={mother_work} alt="" />
            </div>
            <div className={style_card_order.description_card_main}>
                <div className={style_card_order.description_card_price}>
                    <p className={style_card_order.price_main}>9 990 ₽</p>
                    <p className={style_card_order.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={style_card_order.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
        </div>
    );
}