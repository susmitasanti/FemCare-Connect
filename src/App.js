import Navbar from './components/Navbar';
import Tracker from './components/Tracker';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cups from './components/Cups';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Tracker' element={<Tracker />}></Route>
          <Route path='/MenstrualCups' element={<Cups/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
