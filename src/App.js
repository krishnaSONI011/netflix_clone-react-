import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/loginContext';
import Auth from './pages/Auth';

import Netflix from './pages/Netflix';

function App() {

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Netflix/>}/>
      <Route path='/auth/*' element={<Auth/>} ></Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
