import React from 'react'
import Background from '../components/Background'
import {Routes,Route,Outlet} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import AuthHeader from '../components/AuthHeader'
export default function Auth() {
  return (
    <div className='bg h-screen'>
     <AuthHeader/>

        <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Outlet/>
    </div>
  )
}
