import React from 'react'
import {LuChevronRight} from "react-icons/lu";
export default function Signup() {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      {/* titles */}
      <div>

      <p className='text-white font-bold text-3xl mx-10 md:mx-5 text-center md:text-5xl'>

      Unlimited movies, TV shows and more</p>
      <p className='text-center text-white text-xl mx-10 md:mx-5 md:text-2xl mt-5'>Watch anywhere. Cancel anytime.</p>
      <p className='text-center text-white text-xl mx-10 md:mx-5 md:text-2xl mt-5'>Ready to watch? Enter your email to create or restart your membership.</p>
    {/* input of email */}
      <div className='md:flex text-center md:justify-center mt-5 mx-5'>
        <input type={'email'} className=' w-full md:w-2/4 bg-black opacity-70 text-white px-2 text-xl hover:outline-white rounded py-3' placeholder='Enter Your Email'/>
       <div className='flex justify-center mt-5 md:mt-0'> <button className='text-white bg-red-600 px-5 py-4 font-semibold text-2xl mx-1 flex items-center justify-center rounded'>Get Started <LuChevronRight/></button></div>
      </div>
      </div>
      {/* titles */}
    </div>

  )
}
