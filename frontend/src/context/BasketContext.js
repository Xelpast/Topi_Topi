import React, { createContext, useState, useEffect } from 'react';
import { fetchProductById, fetchUserCart, clearUserCart } from '../http/basketApi';
import Spinner from '../components/Spinner/Spinner';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState([]);
    const [basketCount, setBasketCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [initialTotalPrice, setInitialTotalPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]); // Добавляем состояние для хранения данных о продуктах

    const calculateBasketCount = (items) => {
        if (!Array.isArray(items)) {
            return 0;
        }
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const calculateTotalPriceAndSavings = (items, products) => {
        let total = 0;
        let initialTotal = 0;
        let savings = 0;

        items.forEach(item => {
            const product = products.find(product => product.id === item.productId);
            if (product) {
                const productPrice = item.quantity * product.price;
                const productDefaultPrice = item.quantity * product.price_default;
                const productSaving = productDefaultPrice - productPrice;

                total += productPrice;
                initialTotal += productDefaultPrice;
                savings += productSaving;
            }
        });

        return { total, initialTotal, savings };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUserCart();
                if (data && data[0]?.basket_topiaries) {
                    const items = data[0].basket_topiaries;
                    setBasketItems(items);
                    setBasketCount(calculateBasketCount(items));

                    const productIds = items.map(item => item.productId);
                    const productsData = await fetchProductById(productIds);
                    const products = productsData.rows || [];

                    setProducts(products); // Устанавливаем данные о продуктах в состояние

                    const { total, initialTotal, savings } = calculateTotalPriceAndSavings(items, products);
                    setInitialTotalPrice(initialTotal);
                    setTotalPrice(total);
                    setTotalSavings(savings);
                } else {
                    setBasketItems([]);
                    setBasketCount(0);
                    setTotalPrice(0);
                    setInitialTotalPrice(0);
                    setTotalSavings(0);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при получении корзины пользователя:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const updateBasketCount = async () => {
        try {
            const basket = await fetchUserCart();
            if (basket && basket[0]?.basket_topiaries) {
                setBasketItems(basket[0].basket_topiaries);
                setBasketCount(calculateBasketCount(basket[0].basket_topiaries));
                const productIds = basket[0].basket_topiaries.map(item => item.productId);
                const productsData = await fetchProductById(productIds);
                const products = productsData.rows || [];
                const { total, initialTotal, savings } = calculateTotalPriceAndSavings(basket[0].basket_topiaries, products);
                setTotalPrice(total);
                setInitialTotalPrice(initialTotal);
                setTotalSavings(savings);
            } else {
                setBasketItems([]);
                setBasketCount(0);
                setTotalPrice(0);
                setInitialTotalPrice(0);
                setTotalSavings(0);
            }
        } catch (error) {
            console.error('Ошибка при обновлении количества элементов в корзине:', error);
        }
    };

    const clearBasket = async () => {
        try {
            await clearUserCart();
            setBasketItems([]);
            setBasketCount(0);
            setTotalPrice(0);
            setInitialTotalPrice(0);
            setTotalSavings(0);
        } catch (error) {
            console.error('Ошибка при очистке корзины пользователя:', error);
        }
    };

    return (
        <BasketContext.Provider value={{ 
            basketItems, 
            basketCount, 
            totalPrice, 
            initialTotalPrice, 
            totalSavings, 
            products,
            clearBasket,
            updateBasketCount, // Включаем функцию обновления корзины в контекст
            setBasketItems, 
            setIsLoading, 
            calculateBasketCount, 
            calculateTotalPriceAndSavings 
        }}>
            {isLoading ? <Spinner /> : children}
        </BasketContext.Provider>
    );
};