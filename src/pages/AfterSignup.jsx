import React,{useState} from "react";
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../context/loginContext";
let AfterSignup= ()=>{
    const [auth,setAuth] = useAuth()
    let navigation = useNavigate()
    let {param} = useParams();
    const[name,setName] = useState('');
    const [email,setEmail] = useState(param);
    const[password,setPassword] = useState('');

    const register =async ()=>{
        try{
            const response = await axios.post('https://netflix-clone-backend-production-730c.up.railway.app/api/auth/register',{name,email,password});
            if(response.data.status === true){ 
                navigation('/')
                setAuth({
                    user:response.data.user
                })

                localStorage.setItem('auth',JSON.stringify(auth.user))
        }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <div className="flex justify-center items-center h-[80vh]">
                <div className=" backdrop-brightness-[.2] rounded w-2/3 md:w-2/5 text-center flex justify-center flex-col items-center py-3 ">
                    <p className="text-center text-white text-3xl my-2">New User</p>
                    <input type={'text'} className='w-2/3 md:w-2/5 mt-3 bg-gray-600 py-2 px-2 text-white ' placeholder="Enter your name" onChange={e=>setName(e.target.value)}/>
                    <input type={'text'} className='w-2/3 md:w-2/5 mt-3 bg-gray-600 py-2 px-2 text-white ' placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type={'password'} className='w-2/3 md:w-2/5 mt-3 bg-gray-600 py-2 px-2 text-white ' placeholder="Enter your password" onChange={e=>setPassword(e.target.value)}/>
                   <div className="text-center" > <button className="bg-red-600 text-white text-xl px-3 py-2 rounded mt-4" onClick={register}>Sign up</button></div> 
                </div>

        </div>
        </>
    )
}
export default AfterSignup;