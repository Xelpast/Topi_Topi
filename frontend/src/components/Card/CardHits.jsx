import React, { useEffect, useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import mother_work from '../../img/topi0.png';
import style_card_hits from '../../css/card_hits.module.css';
import { fetchLatestProducts } from '../../http/topiaryApi';
import Spinner from '../Spinner/Spinner';
import { AXIOS_URL } from '../../http/indexHttp';


export default function CardHits() {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const fetchLatestProductsData = async () => {
            try {
                const latestProductsData = await fetchLatestProducts();
                setLatestProducts(latestProductsData);
            } catch (error) {
                console.error('Error fetching latest product data:', error);
            }
        };

        fetchLatestProductsData();
    }, []);

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeButtonClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <>
            {latestProducts.map((latestProduct, index) => (
                <div className={style_card_hits.main_card} key={index}>
                    <div className={style_card_hits.main_card_ring}>
                        <div className={style_card_hits.main_card_img}>
                            <img
                                className={style_card_hits.like_img}
                                src={isLiked ? like_red : like}
                                alt="IconLike"
                                onClick={handleLikeButtonClick} />
                            <img className={style_card_hits.main_img} src={AXIOS_URL + latestProduct.img} alt="TopyProduct" />
                        </div>
                    </div><div className={style_card_hits.description_card_main}>
                        <div className={style_card_hits.description_card_price}>
                            <p className={style_card_hits.price_main}>{latestProduct.price.toLocaleString()} ₽</p>
                            <p className={style_card_hits.price_default}><s>{latestProduct.price_default.toLocaleString()} </s></p>
                        </div>
                        <div className={style_card_hits.description_topi}>
                            <p>{latestProduct.name}</p>
                        </div>
                    </div><div className={style_card_hits.button_hits_main}>
                        <button className={style_card_hits.button_hits}>В корзину</button>
                    </div >
                </div>
            ))}
        </>
    );
}