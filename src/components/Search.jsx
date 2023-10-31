import React from 'react'
import { LuSearch } from "react-icons/lu";

const Search = ()=>{
    const[show,setShow] = React.useState(false);

    
    return (
    <>
    <div className='flex items-center w-'>

     <button className={`${show ? 'hidden' : <></>}`} onClick={(e)=> show ? setShow(false) : setShow(true)}><LuSearch className="text-white font-semibold text-xl"/></button>
     <input type="text" className={`${show ? '' : 'hidden'} w-2`}/>
    </div>
    </> 
    )
}
export default Search