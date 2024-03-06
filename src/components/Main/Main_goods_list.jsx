import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';

export default function Goods_list({main_img, price_main, price_default, description_topi}) {
    const [ImageLike, setImageLike] = useState(true);
    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className="main_card">
            <div className="main_card_ring">
                <img
                    className="like_img"
                    src={ImageLike ? like : like_red}
                    alt=""
                    onClick={ImageSwitch}
                />
                <div className="main_card_img">
                    <img className="main_img" src={main_img} alt="" />
                </div>
            </div>
            <div className="description_card_main">
                <div className="description_card_price">
                    <p className="price_main">{price_main}</p>
                    <p className="price_default"><s>{price_default}</s></p>
                </div>
                <div className="description_topi">
                    <p>{description_topi}</p>
                    <div className="button_busket_main">
                        <button className="button_busket">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
}