import React,{useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

let AuthHeader = ()=>{
    const [toggle,setToggle] = useState(true)
    return(
        <>
        <div className='flex items-center justify-between mx-5 md:mx-10'>
            <div><img src={logo} alt="" className='w-32 md:w-48'/></div>
            <div><Link to={`${toggle ?'/auth/sign-up' : '/auth/login'}`}><button className='bg-red-700 text-white p-1 px-2 rounded-md' onClick={()=>toggle ?setToggle(false) : setToggle(true)}>{toggle ? 'Sign up' : 'Sign in'}</button></Link></div>
        </div>
        </>
    )
}
export default AuthHeader;