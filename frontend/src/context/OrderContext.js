import React, { createContext, useState, useContext } from 'react';

export const OrderContext = createContext();
export const useOrder = () => useContext(OrderContext); // Добавили экспорт useOrder

export const OrderProvider = ({ children }) => {
    const [orderData, setOrderData] = useState(null);

    const setOrder = (data) => {
        setOrderData(data);
    };

    return (
        <OrderContext.Provider value={{ orderData, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};