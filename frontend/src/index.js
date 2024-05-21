import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import TopiaryStore from './store/TopiaryStore';
import { BasketProvider } from './context/BasketContext';
import { OrderProvider } from './context/OrderContext';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        userState: new UserStore(),
        topiary: new TopiaryStore(),
    }} >
        <BasketProvider>
            <OrderProvider>
                <App />
            </OrderProvider>
        </BasketProvider>
    </Context.Provider>
);
