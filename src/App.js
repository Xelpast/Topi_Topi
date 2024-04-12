import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_page from './Pages/Main_page';
import Promocodes_page from './Pages/Promocodes_page';
import Like_page from './Pages/Like_page';
import Profile_page from './Pages/Profile_page';
import Basket_page from './Pages/Basket_page';
import Order_pay_page from './Pages/Order_pay_page.jsx';
import Order_page from './Pages/Order_page';
import AppRouter from './components/Router/AppRouter';

export default function App() {
  const [data, setData] = useState();
  
  useEffect( () => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
      <p>
        {
          !data ? "loading" : data
        }
      </p>
    </BrowserRouter>
  );
}
