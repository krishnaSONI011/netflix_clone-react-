import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';

import Netflix from './pages/Netflix';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Netflix/>}/>
      <Route path='/auth/*' element={<Auth/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
