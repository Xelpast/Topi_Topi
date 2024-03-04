import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main_page from './Pages/Main_page';
import Promocodes_page from './Pages/Promocodes_page';
import Like_page from './Pages/Like_page';
import Profile_page from './Pages/Profile_page';
import Basket_page from './Pages/Basket_page';
import Order_page from './Pages/Order_page';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main_page />}></Route>
        <Route path='/promocodes' element={<Promocodes_page />}></Route>
        <Route path='/like' element={<Like_page />}></Route>
        <Route path='/profile' element={<Profile_page />}></Route>
        <Route path='/basket' element={<Basket_page />}></Route>
        <Route path='/order' element={<Order_page />}></Route>
      </Routes>
    </>
  );
}
