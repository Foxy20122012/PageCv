import Cards from "@/src/components/Cards"
import Carousel from "@/src/components/Carrusel"
import Image from "@/src/components/Image"


const Herramientas =()=>{
    return (
        <>

<Image  className="bg-white" imageUrl='https://desarrolloweb.com/storage/tag_images/actual/RMhVjjVD4x1sL1vNnEx6BBFITf9eaEPedch3nfqs.png'>
                <h1 className="text-5xl m-20">Bienvenido a mi apartado de Herramientas</h1>
                <h1 className='Text-center m-20 text-5xl'> Aca podras examinar algunos proyectos base que he preparado para poder evaluar el entorno de desarrollo</h1>
                </Image>
            <h1 className="text-center underline text-black m-5 text-2xl">Esta será nuestra sección de herramientas</h1>

            <Cards/> 

            <Carousel/>
        </>
    )
}

export default Herramientas