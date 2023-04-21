import React from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import Titulo from "@/src/components/Titulo"
import {FcManager} from 'react-icons/fc'
import { BiMailSend } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { BiWinkTongue } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";





const Home = () => {
    return (
<>
    <section>
        <div className='text-center '>
            <Image className="bg-white" imageUrl='https://img.freepik.com/vector-premium/banner-conceptos-palabra-front-end-programacion-aplicaciones-web_106317-84.jpg?w=2000'>
               <div className='text-center m-56'>
                     <h1 className="text-5xl m-20 text-center justify-center ">¡Bienvenidos a mi sitio web!</h1>
                    <h2 className='text-5xl m-20 text-center justify-center '>Frontend Developer</h2>
               
                <div className='bg-[#0A4FF9] h-[3px] w-[120px]'></div> 
                    <h2  className='text-[center] m-10 text-2xl'>Hola soy Enrique Merlos </h2>
                   <p className='text-center m-10  '>Mucho gusto</p> 
                   <p className='text-center m-10  '>Soy un estudiante de Ingeniería en Sistemas y Desarrollador Web.
                   He estado estudiando y practicando las habilidades necesarias para ser un desarrollador frontend</p>
                <Button >Leer mas</Button>
                </div>
              
            </Image>
           
            

             
        </div>
    </section> 
    
    <section className="container mx-auto py-10 px-4">
            <Titulo title="Acerca de mi"/> 
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[60px]">

                <div>
                    <img className="w-[400px]" src="./326966218_885398379440507_6325353439616057798_n (1).jpg" alt="Foto Cv"/>
                </div>

            <div>
                <div  className="flex items-center justify-between w-[500px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex fap-4 items-center font-medium">
                           <FcManager className="m-2 text-[22px] text-[#0034efdd]" /> Nombre
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BiWinkTongue className="m-2 text-[22px] text-[#0034efdd]" /> Edad
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <GiArcheryTarget className="m-2 text-[22px] text-[#0034efdd]" /> Interes
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BsBook className="m-2 text-[22px] text-[#0034efdd]" /> Estudios
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <TfiWorld className="m-2 text-[22px] text-[#0034efdd]" /> ubicación 
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BiMailSend className="m-2 text-[22px] text-[#0034efdd]" /> Correo de ubicación
                        </div>
                        </div>

                            <div className="flex flex-col gap-6 text-gray-600  ">
                                <div className="flex fap-4 items-center font-medium m-2">:</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">:</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">:</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">:</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">:</div>
                                <div className="flex fap-4 items-center font-medium m-2">:</div>
                            
                            </div>

                            <div className="flex flex-col gap-6 text-gray-600  ">
                                <div className="flex fap-4 items-center font-medium m-2">Enrique Alvarez Merlos</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">22 Años</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Programación </div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Ingenieria En Sistemas</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Guatemala</div>
                                <div className="flex fap-4 items-center font-medium m-2">enriquemerlos78@gmail.com</div>
                            
                            </div>


                        </div>
                        <div className="max-w-[800]"></div>
                        <h3 className="font-bold mt-16 mb-10">Me llamo Enrique estudiante de Ingenieria, Programador y Desarrollador Frontend. </h3>
                        <p>Hola. Mi nombre es Enrique Merlos. Soy Estudiante de Ingenieria En Sistemas y me apasiona adquirir nuestros conocimientos
                            en las tecnologias 
                        
                        </p>
                           <button className="flex border bg-blue-500 border-blue-600 text-center items-center rounded m-4 px-4 py-1 
                            hover:bg-blue-600 hover:text-white gap-2" >
                                
                            <a href="https://www.facebook.com/profile.php?id=100040407080122">Leer Mas<BiMessageRounded/>
                                </a>
                                </button>

                            
         
                    </div> 
                </div>
                </section>
</>
    )
}

export default Home
