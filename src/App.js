import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Netflix/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
