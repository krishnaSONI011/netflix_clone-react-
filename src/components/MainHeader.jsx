import React,{useState,useEffect} from "react";
import logo from '../assets/logo.png'
import profile from '../assets/pro.png'
import { FiMenu,FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import DropMenu from "./DropMenu";
import Search from "./Search";
import ResponsiveSidebar from "./ResponsiveSidebar";
let MainHeader = ()=>{
    const[left,setVal] = useState(-100)
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
        <ResponsiveSidebar left={left} setVal={setVal}/>
        <div className={`${black ? 'bg-slate-900' : 'bg-2' } transition-all h-[70px] w-full fixed duration-700 flex z-40`}>
            <div className="flex justify-between w-full items-center ">
                {/* left side */}
              <div className="flex items-center w-full"> <div className="sm:hidden p-2"><button onClick={()=>setVal(0)}><FiMenu className="text-white text-2xl"/></button></div> 
              <div className="flex justify-center w-full md:block md:w-fit">

              <img src={logo} alt="" className="w-32 "/>
              </div>
              {/* navlinks */}
              <div className="hidden md:block">
                <ul className="flex justify-between">
                    <li className="mx-3"><Link to='/' className="text-white font-semibold hover:text-gray-400">Home</Link></li>
                    <li className="mx-3"><Link to='/' className="text-white font-semibold hover:text-gray-400">My List</Link></li>
                </ul>
              </div>
              </div> 

              {/* right side */}
                <div className="hidden md:flex justify-evenly w-60">

                   <Search/>
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