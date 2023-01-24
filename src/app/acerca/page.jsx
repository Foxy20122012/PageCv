import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"
import {FcManager} from 'react-icons/fc'
import { BiMailSend } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { BiWinkTongue } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";


const Acerca =({title})=>{
    return (

        <>
        <Image  className="bg-white" imageUrl='https://talently.tech/blog/wp-content/uploads/2022/01/Programa-con-R-scaled.jpg'>
                <h1 className="text-5xl m-20">Bienvenido en este apartado te contare un poco sobre mi persona</h1>
                <h1 className='Text-center m-20 text-5xl'> Aca podras examinar algunos proyectos base que he preparado para poder evaluar el entorno de desarrollo</h1>
                </Image>
           
           
            <h2 className="text-center underline text-pink-400 ">Esta es la sección donde conoceras mas sobre mi persona</h2>
        
        <section className="container mx-auto py-10 px-4">
            <Titulo title="Acerca de mi"/> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

                <div>
                    <img className="w-[400px]" src="https://scontent.fgua3-5.fna.fbcdn.net/v/t39.30808-6/327446458_1395634707870073_965106594474687045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-SIdoI7UG9kAX-HybP8&_nc_ht=scontent.fgua3-5.fna&oh=00_AfC6ZJmhYtMJr1Y0D0CpXbgSYQ70jDnB-OoHcxETui5TYg&oe=63D39B9B" alt=""/>
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
                                <div className="flex fap-4 items-center font-medium m-2 ">Desarrllo De Software</div>
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

export default Acerca