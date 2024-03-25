import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import main_style from '../../css/main.module.css';

export default function Main_product_list({main_img, price_main, price_default, description_topi}) {
    const [ImageLike, setImageLike] = useState(true);
    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={main_style.main_card}>
            <div className={main_style.main_card_ring}>
                <img
                    className={main_style.like_img}
                    src={ImageLike ? like : like_red}
                    alt=""
                    onClick={ImageSwitch}
                />
                <div className={main_style.main_card_img}>
                    <img className={main_style.main_img} src={main_img} alt="" />
                </div>
            </div>
            <div className={main_style.description_card_main}>
                <div className={main_style.description_card_price}>
                    <p className={main_style.price_main}>{price_main}</p>
                    <p className={main_style.price_default}><s>{price_default}</s></p>
                </div>
                <div className={main_style.description_topi}>
                    <p>{description_topi}</p>
                    <div className={main_style.button_busket_main}>
                        <button className={main_style.button_busket}>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
}