import React,{useState} from 'react';

import { HiPlay,HiHeart} from "react-icons/hi2";
import {useNavigate} from 'react-router-dom'
const Card = (props) => {
  const navi = useNavigate()
function videoPage(){
  localStorage.setItem('video',props.video)
  navi('/player')
}
const [show,setShow] = useState(false)
  return (
    <div className="rounded-lg overflow-hidden shadow-md m-4 hover:scale-125 transition-transform hover:z-100 relative " onMouseEnter={()=>setShow(true)}onMouseLeave={()=>setShow(false)}>
      <img src={props.thum} alt={''} className="w-56 h-auto" />
      <div className={`bg-slate-600 w-full py-2 ${show ? <span></span> : 'hidden' } rounded-b-lg`}>
        <div className='flex justify-evenly w-32 items-center mb-2 '>
          <button className='bg-white p-2 rounded-full' onClick={videoPage}><HiPlay/></button>
            <button className='bg-white p-2 rounded-full'><HiHeart/></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
