import React,{useEffect} from 'react'
import {PageAuth} from '../shared/PageAuth'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from "./Home/HomePage"
import CustomerHeader from './CustomerHeader'
import Products from './Products'
import OrdersPage from './Orders/OrdersPage'
const Customer = () => {
    const navigate=useNavigate();
    //PageAuth("customer")
    useEffect(()=>{
       if(!PageAuth('customer')){
            navigate("/register");
       }
      },[])
  return (
    <div>
      <CustomerHeader />
      <Routes>
        <Route path="" element={<HomePage />}/>
        <Route path="products/:all" element={<Products/>} />
        <Route path="orders" element={<OrdersPage />} />
      </Routes>
    </div>
  )
}

export default Customer