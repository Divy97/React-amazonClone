import React, {useEffect} from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';

import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

//stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51LChUESGL3dGrbDMy455ToDJXtDdIpSEjeGu1oCQVYwtg0gdtCN67SiIvz5BbcHG6kM5xZEd840Ata6pGdFPcYVp00F7O0EgjA');
const App = () => {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
       if(authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
       } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
       }
    })
  }, [])
  
  return (
    //BEM
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<><Header/><Checkout/></>} exact/>
        <Route path="/payment" 
        element={<>
        <Header/>
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
        </>} exact/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;