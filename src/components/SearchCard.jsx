import React from 'react'
import { useNavigate } from 'react-router-dom'
const SearchCard =props=>{
    const navi = useNavigate()
    function videoPage(){
        localStorage.setItem('video',props.video)
        navi('/player')
      }
    return (
        <>
        <div className="flex justify-center border-b-white border-b py-10">
            <div className='flex justify-around w-full'>
            <div>
                <img src={`http://localhost:8080/${props.image}`} alt="" className='rounded'/>
            </div>
            <div className='flex  w-2/3 flex-col justify-between'>
                <h1 className='text-white text-3xl font-semibold'>{props.name}</h1>
                <h1 className='text-white'><span>Gerns:-</span>{props.gerns}</h1>
                <p className='text-white'>{props.des}</p>
                <div>
                    <button className='text-black bg-white  py-2 px-7 font-semibold rounded' onClick={videoPage}>Play</button>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )

}
export default SearchCard;