'use client'
import { useState, useEffect } from "react";
import Sidebar from '../shared/Sidebar';


import { RiAlignJustify, RiUserLine, RiEditBoxLine, RiPieChart2Fill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCloseFullscreen } from "react-icons/md";


const  NavMobil =()=>{

    const [dropdownMenu, setdropdownMenu]=useState (false);
    const [ordenMenu, setordenMenu]= useState (false);
    
    const hookMenu =()=>{
        setdropdownMenu(!dropdownMenu);
    }

    return (
        <section className="nav">
            <main>
                <Sidebar dropdownMenu={dropdownMenu}/>
                <nav className="bg-white sm:hidden flex fixed w-full bottom-0 left-0 py-4 px-14  items-center justify-between rounded-tr-xl rounded-tl-xl border-black border-4">
                    
                     <button className="flex justify-center grid-cols-1" onClick={() => window.location.href = '/'}>
                        <RiUserLine  className=" text-2xl text-center text-black" />
                        <p className="text-black">Home</p>
                    </button>

                    <button >
                        <RiPieChart2Fill  className=" text-2xl text-center text-black"/>
                    </button>
                    <button >
                        <AiOutlineMessage  className=" text-2xl text-center text-black"/>
                    </button>
                    <button onClick={hookMenu}  
                        className=" text-2xl text-center text-black ">
                        {dropdownMenu ? <MdOutlineCloseFullscreen/> : <RiAlignJustify/>}
                    </button>
                </nav>
            </main>
        </section>
    )
}
export default NavMobil 