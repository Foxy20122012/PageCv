'use client'
import '../styles/globals.css'

/*HOOKS */
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '../hooks/useHasMounted'

/*Componentes */

import Image from '../components/Image'
import Titulo from "@/src/components/Titulo"

/*ICONOS */
import {FcManager} from 'react-icons/fc'
import { AiFillLinkedin} from "react-icons/ai" ;
import { BsBook, BsFacebook } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { BiWinkTongue, BiMessageRounded, BiMailSend } from "react-icons/bi";










const Home = () => {
    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className="spinner"></div>
      </div>;

      }
    return (
<>
    <section>
        <div className='text-center '>
            <Image className="bg-white" imageUrl='https://img.freepik.com/vector-premium/banner-conceptos-palabra-front-end-programacion-aplicaciones-web_106317-84.jpg?w=2000'>
               <div className='text-center sm:m-56'>
                    <h1 className="sm:text-5xl sm:m-18 text-center justify-center ">¡Bienvenidos a mi sitio web!</h1>
                    <h2  className='text-center sm:m-14 sm:text-2xl'>Hola soy Enrique Merlos. Estudiante de Ingeniería en Sistemas y Desarrollador Web enfocado en el area de Front-end </h2>
                </div>
            </Image>
        </div>
    </section> 
    
    <section className="container mx-auto py-10 px-4">
            <Titulo title="Acerca de mi"/> 
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[60px] ">

                <div>
                    <img className="w-[400px] " src="https://avatars.githubusercontent.com/u/115357922?v=4" alt="Foto Cv"/>
                </div>
            
            <div className="">
                <div  className="flex items-center justify-between w-[500px] ">
                    <div className="flex flex-col gap-6 desktop-only">
                        <div className="flex fap-4 items-center font-medium ">
                           <FcManager className="m-2 text-[22px] text-[#0034efdd]" /> Nombre
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BiWinkTongue className="m-2 text-[22px] text-[#0034efdd]" /> Edad
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <GiArcheryTarget className="m-2 text-[22px] text-[#0034efdd]" /> Ocupación
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

                        <div className="">
                            <div className="flex flex-col gap-6 text-gray-600  ">
                                <div className="flex fap-4 items-center font-medium m-2">Enrique Alvarez Merlos</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">22 Años</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Programador </div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Ingenieria En Sistemas</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Guatemala</div>
                                <div className="flex fap-4 items-center font-medium m-2">enriquemerlos78@gmail.com</div>
                            
                            </div>
                        </div>

                        </div>
                        <div className="max-w-[800]"></div>
                        <h3 className="font-bold mt-16 mb-10">Me llamo Enrique estudiante de Ingenieria, Programador y Desarrollador Frontend. </h3>
                        <p>Hola. Mi nombre es Enrique Merlos. Soy Estudiante de Ingenieria En Sistemas y me apasiona adquirir nuestros conocimientos
                            en las tecnologias.
                        
                        </p>
                    <div className='mb-8'>
                        <div className='grid grid-cols-2'>
                           <button className="flex border bg-blue-500 border-blue-600 text-center items-center rounded m-4 px-4 py-1 
                            hover:bg-blue-600 hover:text-white gap-2" >
                                
                                <a href="https://www.facebook.com/profile.php?id=100040407080122" className='text-center'>
                                    Facebook
                                    <BsFacebook/>
                                </a>
                            </button>
                            <button className="flex border bg-cyan-500 border-blue-600 text-center items-center rounded m-4 px-4 py-1 
                            hover:bg-cyan-600 hover:text-white gap-2" >
                                
                                <a href="https://www.facebook.com/profile.php?id=100040407080122" className='text-center'>
                                    Linkedin
                                    <AiFillLinkedin/>
                                </a>
                            </button>

                        </div>   
                    </div>
                </div> 
            </div>
        </section>
</>
    )
}

export default Home
