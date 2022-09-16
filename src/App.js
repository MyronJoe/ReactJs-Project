import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services';
import SingUp from './components/pages/SingUp';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/sign-up' element={<SingUp/>} />
          <Route path='/cards' element={<Cards/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

