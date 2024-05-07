import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/mother_work.png';
import style_card_hits from '../../css/card_hits.module.css';
import topi3 from '../../img/topi3.png';

export default function CardHits() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={style_card_hits.main_card}>
            <div className={style_card_hits.main_card_ring}>
                <div className={style_card_hits.main_card_img}>
                    <img
                        className={style_card_hits.like_img}
                        src={ImageLike ? like : like_red}
                        alt="IconLike"
                        onClick={ImageSwitch}
                    />
                    <img className={style_card_hits.main_img} src={topi3} alt="TopyProduct" />
                </div>
            </div>
            <div className={style_card_hits.description_card_main}>
                <div className={style_card_hits.description_card_price}>
                    <p className={style_card_hits.price_main}>9 990 ₽</p>
                    <p className={style_card_hits.price_default}><s>12 487 ₽</s></p>
                </div>
                <div className={style_card_hits.description_topi}>
                    <p>Топиарий "Мамины труды"</p>
                </div>
            </div>
            <div className={style_card_hits.button_hits_main}>
                <button className={style_card_hits.button_hits}>В корзину</button>
            </div>
        </div>
    );
}