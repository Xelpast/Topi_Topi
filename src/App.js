import './App.css';
import React from 'react';
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
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
