import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import style_card_basket from '../../css/card_basket.module.css';

export default function Card_basket() {
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
                    alt=""
                    onClick={ImageSwitch}
                />
                <div className={style_card_basket.main_card_img}>
                    <img class={style_card_basket.main_img} src={mother_work} alt="" />
                </div>
            </div>
            <div className={style_card_basket.description_card_main}>
                <div className={style_card_basket.description_card_price}>
                    <p className={style_card_basket.price_main}>9 990 ₽</p>
                    <p className={style_card_basket.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={style_card_basket.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
        </div>
    );
}