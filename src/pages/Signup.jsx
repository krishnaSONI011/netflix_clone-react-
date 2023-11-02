import React,{useState} from 'react'
import {LuChevronRight} from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Signup() {
  const[email,setEmail]=useState('')
  const navigation = useNavigate()
  // checking the email register or not .
  const send =async ()=>{
    try{
      const response = await axios.post('https://netflix-clone-backend-production-730c.up.railway.app/api/auth/check-user',{email});
      if(response.data.status === true) navigation(`/auth/login/${email}`);
      else if(!response.data.status) navigation( `/auth/new-user/${email}`);
      console.log(response.data)
    }catch(err){
      console.log(err)
    }
  
  }
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
        <input type={'email'} className=' w-full md:w-2/4 bg-black opacity-70 text-white px-2 text-xl hover:outline-white rounded py-3' placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)}/>
       <div className='flex justify-center mt-5 md:mt-0'> <button className='text-white bg-red-600 px-5 py-4 font-semibold text-2xl mx-1 flex items-center justify-center rounded' onClick={send}>Get Started <LuChevronRight/></button></div>
      </div>
      </div>
      {/* titles */}
    </div>

  )
}
