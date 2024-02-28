import './App.css';
import Main_page from './Pages/Main_page';
import Promocodes_page from './Pages/Promocodes_page';
import Like_page from './Pages/Like_page';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main_page />}></Route>
        <Route path='promocodes' element={<Promocodes_page />}></Route>
        <Route path='like' element={<Like_page />}></Route>
      </Routes>
    </>
  );
}
