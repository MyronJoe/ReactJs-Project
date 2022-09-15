import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element='' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

