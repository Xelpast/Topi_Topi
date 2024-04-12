import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import topi from '../../img/topi.png';
import style_topiary from '../../css/topiary.module.css';

export default function Card_Topi() {
    const [ImageLike, setImageLike] = useState(true);

    const ImageSwitch = () => {
        setImageLike(!ImageLike);
    };

    return (
        <div className={style_topiary.main_card}>
            <div className={style_topiary.main_card_ring}>
                <img
                    className={style_topiary.like_img}
                    src={ImageLike ? like_red : like}
                    alt=""
                    onClick={ImageSwitch}
                />
                <div className={style_topiary.main_card_img}>
                    <img className={style_topiary.main_img} src={topi} alt="" />
                </div>
            </div>
        </div>
    );
}