import React, { createContext, useState, useEffect } from 'react';
import { fetchUserCart } from '../http/basketApi';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketCount, setBasketCount] = useState(0);

    const updateBasketCount = async () => {
        try {
            const basket = await fetchUserCart();
            if (basket && basket.basket_topiaries) {
                setBasketCount(basket.basket_topiaries.length);
            } else {
                setBasketCount(0);
            }
        } catch (error) {
            console.error('Ошибка при получении информации о корзине:', error);
        }
    };

    useEffect(() => {
        updateBasketCount();
    }, []);

    return (
        <BasketContext.Provider value={{ basketCount, updateBasketCount }}>
            {children}
        </BasketContext.Provider>
    );
};