import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
export default function Login() {
const {param} = useParams();
const[email,setEmail] = useState(param)
const[password,setPassword]=useState('')
  return (
    <div className='flex items-center justify-center h-[80vh]'>
       <div className=" backdrop-brightness-[.2] rounded w-2/3 md:w-2/6 text-center flex justify-center flex-col items-center py-3 ">
          <div className='w-full flex flex-col items-center'>
            <p className='text-white text-2xl font-semibold'>Log In</p>
            <input type={'email'} className='w-2/3 md:w-2/4 mt-3 bg-gray-600 py-2 px-2 text-white' placeholder='Enter you email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type={'password'} className='w-2/3 md:w-2/4 mt-4 bg-gray-600 py-2 px-2 text-white' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
            <div><button className='bg-red-600 text-white text-xl px-3 py-2 rounded mt-4'>Login</button></div>
          </div>
       </div>
    </div>
  )
}
