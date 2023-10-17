import Navbar from './components/Navbar';
import Tracker from './components/Tracker';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cups from './components/Cups';
import Login from './components/Login';
import Register from './components/Register';
import QR from './components/QR';
import Shipping from './components/Shipping';
import ProductState from './context/Product/ProductState';
import CycleState from './context/Cycle/CycleState';
import UserState from './context/User/UserState';
import AddProduct from './components/AddProduct';
import MyProducts from './components/MyProducts';
import RazorpayPayment from './components/RazorpayPayment';
import CategoryState from './context/Category/CategoryState';
import Map from './components/Map';
import ProductContext from './context/Product/ProductContext';
import { useState } from 'react';



function App() {

  return (
    <>
    <UserState>
      <CategoryState>
    <CycleState>
    <ProductState>
      <BrowserRouter>
        <Navbar /> 
        <br /><br /><br /><br /><br />
        {/* <QR/> */}
         <Routes>
          <Route path='/Map' element={<Map />}></Route>
          <Route path='/' element={<Home />}></Route>

          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Tracker' element={<Tracker />}></Route>
          <Route path='/MenstrualCups' element={<Cups/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/Shipping' element={<Shipping />}></Route>
          <Route path='/AddProduct' element={<AddProduct />}></Route>
          <Route path='/MyProducts' element={<MyProducts/>}></Route> 
          {/* /* <Route path='/s' element={<RazorpayPayment/>}></Route> */}

        </Routes> 
       </BrowserRouter>
      </ProductState>
      </CycleState>
      </CategoryState>
      </UserState>

    </>
  );
}

export default App;
