import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
const App = () => {
  return (
    //BEM
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<><Header/><Checkout/></>} exact/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;