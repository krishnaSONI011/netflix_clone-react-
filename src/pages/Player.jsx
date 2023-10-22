import React from 'react';
import { useParams } from 'react-router-dom';

export default function Player() {
  
  let video = localStorage.getItem('video')
  
  return (
    <div>
      <div className='text-white'>Hello</div>
      <video src={video} autoPlay  controls  className='w-screen h-screen' ></video>
    </div>
  );
}
