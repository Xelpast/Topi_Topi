import React, { useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import { AXIOS_URL } from '../../http/indexHttp';
import style_topiary from '../../css/topiary.module.css';

export default function CardTopi({topiares}) {
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
                    alt="IconLike"
                    onClick={ImageSwitch}
                />
                <div className={style_topiary.main_card_img}>
                    <img className={style_topiary.main_img} src={AXIOS_URL + topiares.img} alt="TopyProduct" />
                </div>
            </div>
        </div>
    );
}