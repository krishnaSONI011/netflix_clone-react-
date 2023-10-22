import React,{useState,useEffect} from "react";
import logo from '../assets/logo.png'
import profile from '../assets/pro.png'
import { LuSearch } from "react-icons/lu";
import { FiMenu,FiChevronDown } from "react-icons/fi";
import DropMenu from "./DropMenu";
let MainHeader = ()=>{
    const [show,setShow] = useState(false);
    const [black,setColor] = useState(false)
     
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        
    })
    function handleScroll(){
        if(window.scrollY === 0 ) setColor(false)
        else if(window.scrollY >= 0) setColor(true)
    }
    return(
        <>
        <div className={`${black ? 'bg-slate-900' : 'bg-2' } transition-all h-[70px] w-full fixed duration-700 flex z-10`}>
            <div className="flex justify-between w-full items-center">
                {/* left side */}
              <div className="flex items-center"> <div className="sm:hidden"><button><FiMenu className="text-white text-2xl"/></button></div> <img src={logo} alt="" className="w-32 "/></div> 
              {/* right side */}
                <div className="flex justify-evenly w-32">

                    <button><LuSearch className="text-white font-semibold text-xl"/></button>
                    <div className="flex items-center relative py-3"  onClick={()=>show ? setShow(false) : setShow(true)}>
                        <img src={profile} alt="" className="mx-2"/>
                        <FiChevronDown className={`text-white text-xl transition-all ${show ? 'rotate-180': <></>}`}/>
                        <DropMenu show={show} />
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainHeader;