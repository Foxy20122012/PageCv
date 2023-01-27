import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"
import {FcManager} from 'react-icons/fc'
import { SiWebmoney } from "react-icons/si";
import { BsFillCursorFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BiAlignMiddle } from "react-icons/bi";

const Contactame =()=>{
return (
    <>
    
<Image  className="bg-white" imageUrl='https://img.freepik.com/foto-gratis/dos-hombres-negocios-confia-estrechar-mano-reunion-oficina-exito-trato-saludo-concepto-socio_1423-185.jpg'>
                <h1 className="text-5xl m-20">Bienvenido  querido Usuario </h1>
                <h1 className='Text-center m-20 text-5xl'> Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte hoy?</h1>
                </Image>
            
        

        <section className="container mx-auto py-10 px-4">
            <Titulo title="Contactame"/> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">

            <div>
                    <img className="w-[400px]" src="https://scontent.fgua3-5.fna.fbcdn.net/v/t39.30808-6/327446458_1395634707870073_965106594474687045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-SIdoI7UG9kAX-HybP8&_nc_ht=scontent.fgua3-5.fna&oh=00_AfC6ZJmhYtMJr1Y0D0CpXbgSYQ70jDnB-OoHcxETui5TYg&oe=63D39B9B" alt=""/>
                </div>
        <div  className="flex items-center justify-between w-[500px]">
                    <div className="flex flex-col gap-6">
                
                </div>
                <div className="flex fap-4 items-center font-medium">
                <FcManager className="m-2 text-[22px] text-[#0034efdd]" /> <p>🫡Para mi es un gran placer poder brindar mis servicios a su Empresa 
                    y su persona👨‍💻. Aun siendo un estudiante y nuevo en el campo, me esfuerzo constantemente por aprender📖 y mejorar mis habilidades 
                    para poder brindar un servicio de calidad. Si tiene algún proyecto📃 o necesidad, no dude en contactarme. Estoy dispuesto a trabajar 
                    y colaborar para alcanzar sus objetivos.🤝</p>
                        </div>
                </div>
                </div>
                </section>

                

                 <section className="m-10 bg-white ">
                    <div className="text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contactame</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">¿Tienes un problema técnico o necesitas ayuda con algún proyecto en particular? ¡Haznos saber! Estamos aquí para ayudarte.</p>
                <form action="https://formsubmit.co/malvarezm26@miumg.edu.gt" method="POST" className="space-y-8 ">
                     
                         <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre<BsFillFileEarmarkPersonFill className="flex mx-auto text-[#3fccebfa]"/></label>
                            <input type="text" name="nombre" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Tu nombre" required></input>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 " >Tu correo<SiWebmoney className="flex mx-auto text-[#3fccebfa]"/></label>
                            <input type="text" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Usuario@gmail.com" required></input>
                        </div>
                        <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Asunto<BiAlignMiddle className="flex mx-auto text-[#3fccebfa]"/></label>
              <input type="text" name="asunto" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Permítenos saber en qué te podemos ayudar" required></input>
                        </div>
                        <div class="sm:col-span-2">
              <label for="endaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje<BsFillEnvelopeFill className="flex mx-auto text-[#3fccebfa]"/></label>
              <textarea name="comentario" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Deja un comentario..."></textarea>
             </div>
             <button type="submit" value="Enviar" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#3fccebfa] hover:bg-[#67c8e6fa]">Enviar<BsFillCursorFill className="flex mx-auto text-[#fffffffa]"/></button>
                    </form> 
                  
                    </div> 
                
                </section>  
                
    </>
)

}

export default Contactame 