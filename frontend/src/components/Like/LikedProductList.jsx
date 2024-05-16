import React from 'react';
import main_style from '../../css/main.module.css';
import { useNavigate } from 'react-router-dom';
import { AXIOS_URL } from '../../http/indexHttp';
import like_red from '../../img/like_red.png';
import { removeToLike } from '../../http/likeApi';

const LikedProductList = ({ likedProduct }) => {
    const navigate = useNavigate();
    
    const handleProductClick = (productId) => {
        navigate(`/topiary/${productId}`);
    };

    const handleRemoveFromLiked = () => {
        removeToLike(likedProduct.id);
        window.location.reload();
    };

    return (
        <div className={main_style.main_card} key={likedProduct.id}>
            <div className={main_style.main_card_ring}>
                <div className={main_style.main_card_img} onClick={() => handleProductClick(likedProduct.id)}>
                    <img className={main_style.main_img} src={AXIOS_URL + likedProduct.img} alt="TopiProduct" />
                </div>
                <img
                    className={main_style.like_img}
                    src={like_red}
                    alt="IconLike"
                    onClick={handleRemoveFromLiked}
                />
            </div>
            <div className={main_style.description_card_main}>
                <div className={main_style.description_card_price}>
                    <p className={main_style.price_main}>{likedProduct.price.toLocaleString()} ₽</p>
                    <p className={main_style.price_default}><s>{likedProduct.price_default.toLocaleString()} ₽</s></p>
                </div>
                <div className={main_style.description_topi}>
                    <p>Топиарий "{likedProduct.name}"</p>
                </div>
            </div>
        </div>
    );
};

export default LikedProductList;
