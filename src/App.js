import Navbar from './components/Navbar';
import Tracker from './components/Tracker';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cups from './components/Cups';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/tracker' element={<Tracker />}></Route>
          <Route path='/cups' element={<Cups/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
