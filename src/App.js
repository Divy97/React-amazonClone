import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
const App = () => {
  return (
    //BEM
    <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />} exact/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;