import React from 'react';
import { AXIOS_URL } from '../../http/indexHttp';
import style_topiary from '../../css/topiary.module.css';

export default function CardTopi({topiares}) {
    return (
        <div className={style_topiary.main_card}>
            <div className={style_topiary.main_card_ring}>
                <div className={style_topiary.main_card_img}>
                    <img className={style_topiary.main_img} src={AXIOS_URL + topiares.img} alt="TopyProduct" />
                </div>
            </div>
        </div>
    );
}