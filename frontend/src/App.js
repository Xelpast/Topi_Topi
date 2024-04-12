import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';
import axios from 'axios';

export default function App() {
  const [topiaries, setTopiaries] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/topiary/')
      .then(response => {
        setTopiaries(response.data);
      })
      .catch(error => {
        console.error('Error fetching topiaries:', error);
      });
  }, []);



  return (
    <BrowserRouter>
      <AppRouter />
      <div>
        <h1>Список топиариев</h1>
        <ul>
          {!Array.isArray(topiaries) ? (
            topiaries.rows.map((topiary) => (
              <li key={topiary.id}>
                <h2>{topiary.name}</h2>
                <p>Цена: {topiary.price}</p>
                <img src={topiary.img} alt={topiary.name} />
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </BrowserRouter>
  );
}
