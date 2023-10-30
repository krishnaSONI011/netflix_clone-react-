import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiPlay, HiOutlineInformationCircle } from 'react-icons/hi';


export default function HeroBanner() {
  const navigation = useNavigate();
 

  const mainImage = [
    { bg: '/images/home.webp', logo: '/images/show.png',description:"Follows Wednesday Addams' years as a student when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents." },
    { bg: '/images/home2.webp', logo: '/images/name2.webp',description:"The series focuses on Asta, a young orphan who is left to be raised in an orphanage alongside his fellow orphan, Yuno. "},
    
  ];

  function random() {
    return Math.floor(Math.random() * 2); // Updated range to 2 for two images
  }

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(random());
  }, []);

  return (
    <div>
      <div className="md:block hidden relative z-0">
        <img src={mainImage[value].bg} alt="" className="w-screen" />
        <div className="absolute top-0 w-full">
          <div className="flex h-screen bg-3 justify-center flex-col px-10 w-full">
            <img src={mainImage[value].logo} alt="" className="w-2/5" />

            <div className="w-2/4 px-6 py-5">
              <p className="text-white text-lg font-semibold drop-shadow-md">
               {mainImage[value].description}
              </p>
            </div>
            <div className="w-1/4 flex justify-evenly items-center mt-5 ">
              <button className="flex items-center bg-slate-200 text-2xl font-semibold py-2 px-4 rounded hover:opacity-70" onClick={() => navigation('/player')}>
                <HiPlay /> Play
              </button>
              <button className="flex items-center text-xl font-semibold text-white justify-evenly py-3 px-4 bg-4 rounded">
                <HiOutlineInformationCircle /> More Info
              </button>
            </div>
          </div>
         <div className='h-40 bg-5 w-full'></div>
        </div>
      </div>
    </div> 
  );
}
