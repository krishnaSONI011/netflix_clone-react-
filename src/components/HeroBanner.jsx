import React,{useState} from 'react'
import bg from '../assets/home.webp'
import logo from '../assets/show.png'
import { useNavigate} from 'react-router-dom';
import { HiPlay,HiOutlineInformationCircle} from "react-icons/hi2";

import CardSlider from './CardSlider';
export default function HeroBanner() {
    const navigation = useNavigate()
    const[title] = useState([{title:'Only On NetFlix',slug:"only-on-netflix"},{title:'All time Best',slug:"all-time-best"}])
  return (
    <div>
      <div className='md:block hidden relative z-0'>
        <img src={bg} alt="" className='w-screen'/>
        <div className='absolute top-0'>
            <div className='flex h-screen  bg-3 justify-center flex-col'>
                <img src={logo} alt="" className='w-2/5'/>

                <div className='w-2/4 px-6    '> 
                    <p className='text-white text-lg font-semibold drop-shadow-md'>Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.</p>
                </div>
                <div className='w-1/4 flex justify-evenly items-center mt-5'>
                    <button className='flex items-center bg-slate-200 text-2xl font-semibold py-2 px-4 rounded hover:opacity-70 ' onClick={()=>navigation(`/player`)}><HiPlay/> Play</button>
                    <button className='flex items-center  text-xl font-semibold  text-white justify-evenly py-3 px-4 bg-4 rounded'><HiOutlineInformationCircle/> More Info</button>
                </div>
            </div>
            <div className='w-full bg-5 h-[200px] '> 
            {title.map((t)=>(
              <CardSlider title={t.title} key={t.title} category={t.slug}/>     

            ))}
            
            

            </div>
        </div>
       
      </div>

    </div>
  )
}
