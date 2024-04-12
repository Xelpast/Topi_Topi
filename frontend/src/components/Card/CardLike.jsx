import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import like_style from '../../css/like.module.css';


export default function CardLike() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={like_style.main_card}>
            <div className={like_style.main_card_ring}>
                <img
                    className={like_style.like_img}
                    src={ImageLike ? like_red : like}
                    alt="IconLike"
                    onClick={ImageSwitch}
                />
                <div className={like_style.main_card_img}>
                    <img className={like_style.main_img} src={mother_work} alt="TopyProduct" />
                </div>
            </div>
            <div className={like_style.description_card_main}>
                <div className={like_style.description_card_price}>
                    <p className={like_style.price_main}>9 990 ₽</p>
                    <p className={like_style.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={like_style.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
            <div className={like_style.button_busket_main}>
                <button className={like_style.button_busket}>В корзину</button>
            </div>
        </div>
    );
}