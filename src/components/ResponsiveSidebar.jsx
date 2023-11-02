import React from 'react'
import Search from './Search'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../context/loginContext'

export default function ResponsiveSidebar(props) {
  let navi = useNavigate()
  const [auth,setAuth] = useAuth()

    const logout = ()=>{

        setAuth({user:''})
        localStorage.removeItem('auth')
        localStorage.removeItem('video')
        navi('/auth/sign-up')
      }
  return (
    <div className='h-screen bg-slate-900 absolute z-50 w-52 transition-all duration-200' style={{
        left:`${props.left}%`
    }}>
            <div className='text-right pr-1 pt-1'>
                <button className='w-fit text-white bg-4 px-3 py-1 rounded-full' onClick={()=>props.setVal(-100)}> X </button>
            </div>
        <div className='px-2 py-4'>

        <Search/>
        </div>

        <div className=''>
            <ul className='flex justify-evenly flex-col items-center'>
                <li className='py-3'><Link to='/' className='text-white font-semibold '>Home</Link></li>
                <li className='py-3'><Link to='/' className='text-white font-semibold '>My List</Link></li>
                <li className='py-3'><Link to='/' className='text-white font-semibold 'onClick={logout}>Sign out</Link></li>
            </ul>
        </div>
    </div>
  )
}
