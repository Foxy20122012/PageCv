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
        <section>
            <main>
                <Sidebar dropdownMenu={dropdownMenu}/>
                <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 py-4 px-8 flex items-center justify-between rounded-tr-xl rounded-tl-xl">
                    
                    <button >
                        <RiUserLine  className=" text-2xl text-center text-cyan-100 "/>
                    </button>
                    <button >
                        <RiPieChart2Fill  className=" text-2xl text-center text-cyan-100"/>
                    </button>
                    <button >
                        <AiOutlineMessage  className=" text-2xl text-center text-cyan-100"/>
                    </button>
                    <button onClick={hookMenu}  
                        className=" text-2xl text-center text-cyan-50 ">
                        {dropdownMenu ? <MdOutlineCloseFullscreen/> : <RiAlignJustify/>}
                    </button>
                </nav>
            </main>
        </section>
    )
}
export default NavMobil 