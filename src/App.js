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


function App() {

  return (
    <>
    <CycleState>
    <ProductState>
      <BrowserRouter>
        <Navbar />
        <br /><br /><br /><br /><br />
        {/* <QR/> */}
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Tracker' element={<Tracker />}></Route>
          <Route path='/MenstrualCups' element={<Cups/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/Shipping' element={<Shipping/>}></Route>


        </Routes>
      </BrowserRouter>
      </ProductState>
      </CycleState>
    </>
  );
}

export default App;
