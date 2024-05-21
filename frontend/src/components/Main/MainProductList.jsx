import React, { useContext, useEffect, useState } from 'react';
import like from '../../img/like.png';
import like_red from '../../img/like_red.png';
import basket_trash from '../../img/basket.png';
import main_style from '../../css/main.module.css';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/const';
import { AXIOS_URL } from '../../http/indexHttp';
import { observer } from 'mobx-react';
import { Context } from '../../index';
import { deleteTopiary, updateTopiary } from '../../http/topiaryApi';
import { addToLike, removeToLike } from '../../http/likeApi';
import { addToBasket } from '../../http/basketApi';
import { BasketContext } from '../../context/BasketContext';
import { toast } from 'react-toastify';

const MainProductList = observer(({ topiary, userLikes }) => {
    const { userState } = useContext(Context);
    const { basketItems, setBasketItems, updateBasketCount } = useContext(BasketContext);
    const checkRole = userState.user.role;
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (userLikes && Array.isArray(userLikes)) {
            const likedProductIds = userLikes.flatMap(like => like.like_topiaries.map(item => item.productId));
            setIsLiked(likedProductIds.includes(topiary.id));
        }
    }, [topiary.id, userLikes]);

    const handleButtonClick = () => {
        scrollToTop();
        navigate('/topiary' + '/' + `${topiary.id}`);
    };

    const handleDeleteButtonClick = async () => {
        try {
            const confirmed = window.confirm("Вы точно хотите удалить товар?");
            if (confirmed) {
                await deleteTopiary(topiary.id);
                window.location.reload();
            }
        } catch (error) {
            console.error('Ошибка при удалении товара:', error);
        }
    };

    const handleUpdateButtonClick = async () => {
        try {
            // Обновление товара
        } catch (error) {
            console.error('Ошибка при обновлении товара:', error);
        }
    };

    const handleLikeButtonClick = async () => {
        try {
            if (isLiked) {
                await removeToLike(topiary.id);
            } else {
                await addToLike(topiary.id);
            }
            setIsLiked(!isLiked);
        } catch (error) {
            console.error('Ошибка при обновлении состояния лайка:', error);
        }
    };

    const handleAddToBasketButtonClick = async () => {
        try {
            if (!userState.isAuth) {
                toast.warn('Войдите в аккаунт, чтобы добавить товар в корзину', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                return;
            }

            await addToBasket(topiary.id);
            const updatedBasketItems = [...basketItems, topiary];
            setBasketItems(updatedBasketItems);
            await updateBasketCount();
            toast.success('Товар добавлен в корзину', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    return (
        <div className={main_style.main_card}>
            <div className={main_style.main_card_ring}>
                <div className={main_style.main_card_img} onClick={handleButtonClick}>
                    <img className={main_style.main_img} src={AXIOS_URL + topiary.img} alt="Topiary Product" />
                </div>
                {checkRole === "ADMIN" ? (
                    <img
                        className={main_style.like_img}
                        src={basket_trash}
                        alt="Trash Icon"
                        onClick={handleDeleteButtonClick}
                    />
                ) : (
                    <img
                        className={main_style.like_img}
                        src={isLiked ? like_red : like}
                        alt="Like Icon"
                        onClick={handleLikeButtonClick}
                    />
                )}
            </div>
            <div className={main_style.description_card_main}>
                <div className={main_style.description_card_price}>
                    <p className={main_style.price_main}>{topiary.price.toLocaleString()} ₽</p>
                    <p className={main_style.price_default}><s>{topiary.price_default.toLocaleString()} ₽</s></p>
                </div>
                <div className={main_style.description_topi}>
                    <p>Топиарий "{topiary.name}"</p>
                    <div className={main_style.button_busket_main}>
                        {checkRole === "ADMIN" ? (
                            <button className={main_style.button_busket} onClick={handleUpdateButtonClick}>
                                Изменить товар
                            </button>
                        ) : (
                            <button className={main_style.button_busket} onClick={handleAddToBasketButtonClick}>В корзину</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MainProductList;
