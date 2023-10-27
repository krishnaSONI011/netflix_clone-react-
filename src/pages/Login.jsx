import React,{useState} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../context/loginContext';
export default function Login() {
const[auth,setAuth] = useAuth();
const {param} = useParams();
const navigation = useNavigate()
const[email,setEmail] = useState(param)
const[password,setPassword]=useState('');
const [error,seterror] = useState({password:'',user:''})
async function log(){
  try{
   const response = await axios.post('http://localhost:8080/api/auth/login',{email,password});
   if(response.data.status) {
      setAuth(response.data.user)
      localStorage.setItem('auth',JSON.stringify(auth))
   navigation('/')
  }
   else if(!response.data.status){
    if(response.data.message === 'Please check the password'){
      seterror({password:response.data.message})
    }
    
  }
  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div className='flex items-center justify-center h-[80vh]'>
       <div className=" backdrop-brightness-[.2] rounded w-2/3 md:w-2/6 text-center flex justify-center flex-col items-center py-3 ">
          <div className='w-full flex flex-col items-center'>
            <p className='text-white text-2xl font-semibold'>Log In</p>
            <input type={'email'} className='w-2/3 md:w-2/4 mt-3 bg-gray-600 py-2 px-2 text-white' placeholder='Enter you email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type={'password'} className='w-2/3 md:w-2/4 mt-4 bg-gray-600 py-2 px-2 text-white' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
            <div className='text-red text-xl'>{error.password}</div>
            <div><button className='bg-red-600 text-white text-xl px-3 py-2 rounded mt-4' onClick={log}>Login</button></div>
          </div>
       </div>
    </div>
  )
}
