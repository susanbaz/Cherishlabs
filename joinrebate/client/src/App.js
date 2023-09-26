import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About';
import Shop from './components/Shop';
import Shopsingle from './components/Shopsingle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Login from './components/User/Login';

export default function App() {
  return (
    <BrowserRouter>
      <div id="container">
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/all" element={<Shop />} />
          <Route path="/shop_single" element={<Shopsingle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
