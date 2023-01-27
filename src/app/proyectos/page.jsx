
import Image from '../../components/Image'
import Cards from "@/src/components/Cards"

const Proyectos=()=>{
    return(
        <>
            <Image  className="bg-white" imageUrl='https://previews.123rf.com/images/artinspiring/artinspiring1909/artinspiring190900998/130370493-frontend-development-web-banner-concept-website-interface.jpg'>
                
            <h1 className="text-5xl m-20">Explora mis proyectos</h1>

                <h1 className="text-center m-20 text-2xl  font-medium leading-tight text-[#ffffff]">Bienvenido a mi apartado de proyectos, aquí podrás ver algunos de los proyectos en los que he trabajado y en los que he puesto
                 en práctica mis habilidades en desarrollo web. Estos proyectos van desde aplicaciones web hasta sitios web, todos ellos desarrollados con las últimas tecnologías 
                 y herramientas. Espero que disfrutes explorando mis proyectos y no dudes en ponerte en contacto conmigo si tienes alguna pregunta o si estás interesado en trabajar
                  juntos en un futuro proyecto.</h1>

                </Image>
        
        <div className='flex justify-center'>
            <h2 className='text-2xl m-10 text-center '>Aquí podrás encontrar una selección de mis proyectos recientes, 
            donde podrás ver los lenguajes de programación, herramientas y tecnologías que utilicé para desarrollarlos. 
            También te proporcionaré un enlace a los repositorios de cada proyecto para que puedas explorarlos con más detalle.</h2>
        </div>
        <div className=' flex   justify-center '>
                <Cards 
         imageUrl='https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png'
         imageAlt='Github'
         title='Github'
         description='Este es el enlace a mi perfil de Github donde donde podras examinar los repositorios de los proyectos mas a detalle.' 
          linkUrl='https://github.com/Foxy20122012'
         />
        </div>

        <div className="bg-teal-400 m-5 h-[23px] w-full translate-y-2 translate-x-2"> </div>
  
        <div className='flex justify-center'>
            <h2 className='text-2xl m-10'>Aquí podrás ver algunos de los proyectos que he desarrollado y desplegado en producción utilizando herramientas como Vercel. ¡Echa un vistazo!</h2>
        </div>
        <div className=' flex   justify-center '>
                <Cards 
         imageUrl='https://mathworld.wolfram.com/images/eps-svg/Tic-Tac-Toe_600.svg'
         imageAlt='Totito'
         title ='Totito'
         description='Tic-tac-toe, tres en raya, o Xs y Os es un juego de papel y lápiz para dos 
         jugadores que se turnan para marcar los espacios en una cuadrícula de tres por tres con X u O.
          El jugador que logre colocar tres de sus marcas en una fila horizontal, vertical o diagonal es el ganador' 
          linkUrl=''
         />



        <Cards 
         imageUrl='https://res.cloudinary.com/practicaldev/image/fetch/s--FBtOR0dz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/wl7mi32muf6bn3ahiess.png'
         imageAlt='Hydratation-Render-SSG'
         title='Hydratation-Render-SSG'
         description='La hidratación es el proceso de usar JavaScript del lado del cliente para 
         agregar el estado de la aplicación y la interactividad al HTML generado por el servidor.
          Es una característica de React, una de las herramientas subyacentes que forman el marco de Gatsby.
           Gatsby utiliza la hidratación para transformar el HTML estático creado en el momento de la compilación 
           en una aplicación React' 
          linkUrl=''
         />
         </div>
         <div className="flex justify-center text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h1 className="text-2xl font-medium text-center hover:underline">Proximamente Nuevos Proyectos...</h1>
  
</div>
    <p className="mb-text-base leading-relaxed text-center text-gray-900 hover:underline ">Actualmente se estan desarrollando nuevos proyectos para este apartado. Sigue esperando nuevas sorpresas...</p>
        
       <div className='m-20'></div> 
    
        </>
    )
}


export default Proyectos