import React from 'react'
import {Link} from 'react-router-dom'
export default function DropMenu(props) {
  return (
    <div className={`${props.show ? 'block' : 'hidden'} absolute bg-black h-fit w-[100px] top-12 right-0 p-3`}>
      <div>
        <ul>
            <li className='text-center border-t-gray-400 p-1 m-1 hover:bg-gray-800'><Link className='text-white '>Sing out</Link></li>
        </ul>
      </div>
    </div>
  )
}
