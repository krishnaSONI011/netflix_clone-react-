import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/loginContext';
import { movieProvider } from './context/movieData';
import Auth from './pages/Auth';
import Mainpage from './pages/Mainpage';
import Player from './pages/Player';

function App() {

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    
    <Routes>
      <Route path='/*' element={<Mainpage/>}/>
      <Route path='/auth/*' element={<Auth/>} ></Route>
      <Route path='/player' element={<Player/>}/>

    </Routes>
    
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
