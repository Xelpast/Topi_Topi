import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import main_style from '../../css/main.module.css';

export default function Card() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={main_style.main_card}>
            <div className={main_style.main_card_ring}>
                <img
                    className={main_style.like_img}
                    src={ImageLike ? like_red : like}
                    alt="IconLike"
                    onClick={ImageSwitch}
                />
                <div className={main_style.main_card_img}>
                    <img className={main_style.main_img} src={mother_work} alt="TopyProduct" />
                </div>
            </div>
            <div className={main_style.description_card_main}>
                <div className={main_style.description_card_price}>
                    <p className={main_style.price_main}>9 990 ₽</p>
                    <p className={main_style.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={main_style.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
            <div className={main_style.button_busket_main}>
                <button className={main_style.button_busket}>В корзину</button>
            </div>
        </div>
    );
}