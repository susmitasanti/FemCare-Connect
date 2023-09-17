import Pharmacy from './components/Pharmacy';
import Tracker from './components/Tracker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Tracker/>}></Route>
  <Route path='/pharmacy' element={<Pharmacy/>}></Route>
</Routes>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
