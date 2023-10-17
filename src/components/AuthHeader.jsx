import React from 'react'
import logo from '../assets/logo.png'
let AuthHeader = ()=>{
    return(
        <>
        <div className='flex items-center justify-between mx-5 md:mx-10'>
            <div><img src={logo} alt="" className='w-32 md:w-48'/></div>
            <div><button className='bg-red-700 text-white p-1 px-2 rounded-md'>Sign up</button></div>
        </div>
        </>
    )
}
export default AuthHeader;