import React from 'react'
import Button from '../components/Button'
import Image from '../components/Image'






const Home = () => {
    return (
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
                <Button ><h1>Leer mas</h1></Button>
                </div>
              
            </Image>
            
            

            
            
        </div>
    )
}

export default Home
