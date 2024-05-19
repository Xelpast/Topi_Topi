import React, { useEffect, useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import style_card_basket from '../../css/card_basket.module.css';
import { AXIOS_URL } from '../../http/indexHttp';
import { addToLike, removeToLike } from '../../http/likeApi';
import { observer } from 'mobx-react';

const BasketItemList = observer(({ item, isLiked, toggleLike }) => {
    const [localIsLiked, setLocalIsLiked] = useState(isLiked);

    useEffect(() => {
        setLocalIsLiked(isLiked);
    }, [isLiked]);

    const handleLikeClick = async () => {
        try {
            if (localIsLiked) {
                await removeToLike(item.id);
            } else {
                await addToLike(item.id);
            }
            setLocalIsLiked(!localIsLiked);
            toggleLike(item.id);
        } catch (error) {
            console.error('Ошибка при обновлении состояния лайка:', error);
        }
    };

    return (
        <div className={style_card_basket.main_card}>
            <div className={style_card_basket.main_card_ring}>
                <img
                    className={style_card_basket.like_img}
                    src={localIsLiked ? like_red : like}
                    alt="IconLike"
                    onClick={handleLikeClick}
                />
                <img className={style_card_basket.main_img} src={AXIOS_URL + item.img} alt={item.name} />
            </div>
            <div className={style_card_basket.description_card_main}>
                <div className={style_card_basket.description_card_price}>
                    <p className={style_card_basket.price_main}>{item.price} ₽</p>
                    <p className={style_card_basket.price_default}><s>{item.price_default} ₽</s></p>
                </div>
                <div className={style_card_basket.description_topi}>
                    <p>{item.name}</p>
                </div>
            </div>
        </div>
    );
});

export default BasketItemList;