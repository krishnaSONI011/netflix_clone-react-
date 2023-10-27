import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/loginContext'
import { useNavigate } from 'react-router-dom'
export default function DropMenu(props) {
  const [auth,setAuth] = useAuth()
  let navi = useNavigate()
  const logout = ()=>{
    setAuth({user:''})
    localStorage.removeItem('auth')
    localStorage.removeItem('video')
    navi('/auth/sign-up')
  }
  return (
    <div className={`${props.show ? 'block' : 'hidden'} absolute bg-black h-fit w-[100px] top-12 right-0 p-3`}>
      <div>
        <ul>
            <li className='text-center border-t-gray-400 p-1 m-1 hover:bg-gray-800'><Link className='text-white ' onClick={logout}>Sing out</Link></li>
        </ul>
      </div>
    </div>
  )
}
