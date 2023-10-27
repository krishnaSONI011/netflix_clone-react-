import React from 'react';
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
export default function Player() {
  let navi = useNavigate()
  let video = localStorage.getItem('video')
  
  return (
    <div>
      <button className='text-white rounded-full bg-4 absolute p-3   cursor-pointer z-10 m-2 text-2xl' onClick={()=>navi('/')}><LuArrowLeft/></button>
      <video src={video} autoPlay  controls  className='w-screen h-screen' ></video>
    </div>
  );
}
