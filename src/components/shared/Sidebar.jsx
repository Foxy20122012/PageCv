import { RiHome6Fill, RiLogoutBoxLine,RiPieChart2Fill } from "react-icons/ri";
import { TiMessages} from "react-icons/ti";
import { VscBellDot} from "react-icons/vsc";
import { HiOutlineUsers, HiCog6Tooth} from "react-icons/hi2";

const Sidebar =(props)=>{

    const {dropdownMenu}= props;

    return(
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full container flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50  ${dropdownMenu ? "left-0": "-left-full"}`}>
            
       <div>
        <ul className=" pl-4">
                <li>
                   <h1 className=" text-gray-300 text-2xl text-center  my-5 container uppercase font-bold" >Logo</h1>
                </li>
                <li className="bg-[#262837] p-4 rounded-tl-lg rounded-bl-lg">
                    <a href ="/" className="bg-[#ec7c6a] p-4 box-content  rounded-lg text-center text-white flex justify-center">
                        <RiHome6Fill className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="/user" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex justify-center group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <HiOutlineUsers className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="#" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex justify-center group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <RiPieChart2Fill className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="#" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex justify-center group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <TiMessages className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="#" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex justify-center group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <VscBellDot className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="#" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex justify-center group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <HiCog6Tooth className=" text-2xl text-center "/>
                    </a>
                </li>
                
                <div>
                
                </div>
            </ul>
        </div> 
            <ul className=" pl-4">
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-[#262837] group">
                    <a href ="#" className=" p-4 box-content  rounded-lg text-center text-[#ec7c6a] flex flex-col justify-between group-hover:text-white group-hover:bg-[#ec7c6a] ">
                        <RiLogoutBoxLine className=" text-2xl text-center "/>
                    </a>
                </li>
            </ul>
         </div>
    )
}

export default Sidebar