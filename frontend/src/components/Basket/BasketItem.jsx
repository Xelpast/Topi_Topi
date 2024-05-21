import React, { useContext, useEffect, useState } from 'react';
import basket from '../../img/basket.png';
import style_basket from '../../css/basket.module.css';
import { BasketContext } from '../../context/BasketContext';
import { fetchProductById, removeFromCart, updateBasketProductQuantity } from '../../http/basketApi';
import { observer } from 'mobx-react';
import BasketItemList from './BasketItemList';
import { fetchUserLikes } from '../../http/likeApi';
import { toast } from 'react-toastify';

const BasketItem = observer(() => {
    const { basketItems, setBasketItems, updateBasketCount } = useContext(BasketContext);
    const [products, setProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const data = await fetchUserLikes();
                const likedProductIds = data.flatMap(like => like.like_topiaries.map(item => item.productId));
                setLikedProducts(likedProductIds);
            } catch (error) {
                console.error('Ошибка при получении лайков:', error);
            }
        };

        fetchLikes();
    }, []);

    const toggleLike = (productId) => {
        setLikedProducts((prevLikedProducts) =>
            prevLikedProducts.includes(productId)
                ? prevLikedProducts.filter((id) => id !== productId)
                : [...prevLikedProducts, productId]
        );
    };

    const handleQuantityChange = async (productId, delta) => {
        const currentQuantity = productQuantities[productId] || 1;
        const newQuantity = Math.max(1, currentQuantity + delta);

        setProductQuantities((prevQuantities) => {
            return { ...prevQuantities, [productId]: newQuantity };
        });

        try {
            await updateBasketProductQuantity(productId, newQuantity);
            const updatedBasketItems = basketItems.map(item =>
                item.productId === productId ? { ...item, quantity: newQuantity } : item
            );
            setBasketItems(updatedBasketItems);
            await updateBasketCount(); // обновляем количество товаров и общую стоимость
        } catch (error) {
            console.error('Ошибка при обновлении количества товара в корзине:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const itemToDelete = basketItems.find(item => item.productId === productId);
            if (!itemToDelete) {
                console.error('Товар с указанным productId не найден в корзине');
                return;
            }

            const quantityToDelete = itemToDelete.quantity;

            await removeFromCart(productId);
            
            const updatedBasketItems = basketItems.filter(item => item.productId !== productId);
            setBasketItems(updatedBasketItems);

            setProductQuantities((prevQuantities) => {
                const newQuantities = { ...prevQuantities };
                delete newQuantities[productId];
                return newQuantities;
            });

            await updateBasketCount(-quantityToDelete);
            toast.success('Товар удалён из корзины', {
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
            console.error('Ошибка при удалении товара из корзины:', error);
        }
    };

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productIds = basketItems.map(item => item.productId);
                const productsData = await fetchProductById(productIds);
                
                if (Array.isArray(productsData.rows)) {
                    const filteredProducts = productsData.rows.filter(product => productIds.includes(product.id));
                    setProducts(filteredProducts);
                    console.log(filteredProducts);

                    const initialQuantities = basketItems.reduce((acc, item) => {
                        acc[item.productId] = item.quantity;
                        return acc;
                    }, {});
                    setProductQuantities(initialQuantities);
                } else {
                    console.error('Данные о продуктах не являются массивом:', productsData);
                }
            } catch (error) {
                console.error('Ошибка при получении информации о продуктах:', error);
            }
        };
        
        getProductDetails();
    }, [basketItems]);

    return (
        <>
            {products.map((product, index) => (
                <div key={index} className={style_basket.product_basket}>
                    <BasketItemList 
                        item={product} 
                        isLiked={likedProducts.includes(product.id)} 
                        toggleLike={toggleLike} 
                    />
                    <div className={style_basket.info_card_basket}>
                        <p className={style_basket.text_info_basket}>Самовывоз: 4–14 марта <br />Доставка по клику: 8–16 марта</p>
                        <div className={style_basket.btn_counter}>
                            <button 
                                className={style_basket.btn_counter_minus} 
                                onClick={() => handleQuantityChange(product.id, -1)}
                            >–</button>
                            <input 
                                type="text" 
                                value={productQuantities[product.id] || 1} 
                                className={style_basket.input_counter} 
                                readOnly 
                            />
                            <button 
                                className={style_basket.btn_counter_plus} 
                                onClick={() => handleQuantityChange(product.id, 1)}
                            >+</button>
                            <div className={style_basket.basket_img}>
                                <img 
                                    src={basket} 
                                    alt="basket" 
                                    onClick={() => handleDelete(product.id)} 
                                    style={{ cursor: 'pointer' }} 
                                />
                            </div>
                        </div>
                        <p className={style_basket.similar_products}>Посмотреть похожие товары</p>
                    </div>
                </div>
            ))}
        </>
    );
});

export default BasketItem;
