import React, { useState,useEffect } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import Card from './Card'; // Import your Card component
import axios from 'axios';
const CardSlider = props => {
    let [data,setData] = useState([])
    useEffect(()=>{
        async function fetch(){
            try{
                const param = props.category
                console.log(param)
                let response = await axios.get(`http://localhost:8080/api/movies/get/${props.category}`)
                setData(response.data.data)
                
            }catch(err){console.log(err)}
        }
        fetch()
    },[])
    console.log(data)
    const[left ,setPosition] = useState(100)
    const[show,setShow] = useState(false)
    return(
        <div className='relative w-full px-4 py-2' onMouseEnter={()=>setShow(true) } onMouseLeave={()=>setShow(false)}>
            <div className='my-2'>
                <h1 className='text-white text-2xl font-semibold '>{props.title}</h1>
            </div>
            <div className='relative w-full flex h-full'>
                <button className={`${show ? <></> :'hidden'} text-white text-2xl h-[150px] px-2    items-center flex bg-4 absolute left-0 z-10`} onClick={()=>setPosition(left + 100)}><LuChevronLeft/></button>
                <div className='overflow-hidden h-[250px] w-full flex items-baseline'>
                <div className='relative z-0 transition-all duration-300 flex items-center' style={{left:`${left}px`}}>
                  {
                    data.map((tile)=>(
                        <Card thum = {tile.thumbnailURL} video={tile.videoURL} key={tile._id}/>

                    ))
                  }
                </div>
                </div>
               
                <button className='text-white text-2xl h-[150px] px-2    items-center flex bg-4 absolute right-0 z-10'onClick={()=>setPosition(left - 100)}><LuChevronRight/></button>
            </div>
        </div>
    )
    
}

export default CardSlider;
