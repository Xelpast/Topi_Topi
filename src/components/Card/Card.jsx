import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';

export default function Card() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className="main_card">
            <div className="main_card_ring">
                <img
                    className="like_img"
                    src={ImageLike ? like_red : like}
                    alt=""
                    onClick={ImageSwitch}
                />
                <div className="main_card_img">
                    <img className="main_img" src={mother_work} alt="" />
                </div>
            </div>
            <div className="description_card_main">
                <div className="description_card_price">
                    <p className="price_main">9 990 ₽</p>
                    <p className="price_default"><s>12 487 ₽</s></p>
                </div>
                <div className="description_topi">
                    <p>Топиарий "Мамины труды"</p>
                    <div className="button_busket_main">
                        <button className="button_busket">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
}