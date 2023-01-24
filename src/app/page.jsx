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
                    <p  className='text-[center] m-10'>Hola soy Enrique Merlos 
                    
                    </p>

            
                <Button ><h1>Leer mas</h1></Button>
                </div>
              
            </Image>
            
            

            <h2 className='text-center text-5xl m-10 font-bol italic'>Hello Esta es una prueba del texto</h2>
            
        </div>
    )
}

export default Home
