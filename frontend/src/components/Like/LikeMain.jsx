import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import style_like from '../../css/like.module.css';
import ExtraMenuLike from '../Extra_menu/ExtraMenuLike';
import SubMainLine from '../Main/SubMainLine';
import { Context } from '../../index';
import { fetchUserLikes } from '../../http/likeApi';
import LikedProductList from './LikedProductList';
import { fetchProducts } from '../../http/likeApi';

const LikeMain = observer(() => {
    const [likes, setLikes] = useState([]);
    const [products, setProducts] = useState([]);
    const { userState } = useContext(Context);

    useEffect(() => {
        const userId = userState.user.id;
        fetchUserLikes(userId)
            .then(data => {
                setLikes(data);
                const productIds = data.map(like => like.like_topiaries.map(item => item.productId)).flat();
                return fetchProducts(productIds);
            })
            .then(products => setProducts(products.rows))
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, [userState.user.id]);


    return (
        <div className={style_like.main}>
            <SubMainLine />
            <div className={style_like.main_content}>
                <ExtraMenuLike />
                <div className={style_like.likes}>
                    <p className={style_like.like_main}>Избранное</p>
                    <div className={style_like.main_info_like}>
                        <p>Сохранили</p>
                        <p>Покупали</p>
                    </div>
                    {likes.map((like, index) => (
                    <div className={style_like.grid_likes_item} key={index}>
                        {like.like_topiaries.length === 0 ? (
                            <p className={style_like.no_likes_message}>Избранных товаров пока нет.</p>
                        ) : (
                            like.like_topiaries.map((likeTopiary, idx) => {
                                const likedProduct = products.find(product => product.id === likeTopiary.productId);
                                return likedProduct ? (
                                    <LikedProductList key={idx} likedProduct={likedProduct} />
                                ) : null;
                            })
                        )}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
});

export default LikeMain;