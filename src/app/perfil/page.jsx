import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"

const Perfil=()=>{
return (
    <div className="text-center">
            <Image  className="bg-white" imageUrl='https://www.universia.net/content/dam/universia/imagenes/2018/12/estudiar-ingenieria-informatica/_jcr_content/renditions/thumb-m.jpg'>
                <h1 className="text-5xl m-20">Mi camino hacia el crecimiento continuo: Siempre en evolución</h1>
                <h1 className="text-center m-20 text-2xl  font-medium leading-tight text-[#ffffff] ">Soy estudiante de ingeniería y me apasiona el mundo de la tecnología 
                y la programación. Mi objetivo es seguir aprendiendo y desarrollándome constantemente para convertirme en un experto en mi campo. Me esfuerzo por estar siempre 
                en evolución, ya sea a través de la realización de proyectos personales o la participación en programas de capacitación y certificación. Estoy abierto a nuevas
                 oportunidades y desafíos, y estoy ansioso por ver lo lejos que puedo llegar en mi carrera.</h1>
                </Image>

             <Titulo title="Educación"/>

             <div className="">
             <div className="">
                
                </div>
                
            </div>

             <Titulo title="Habilidades Blandas"/> 

            <div className="">
            <div className="">
                
                </div>
                
            </div>

            <Titulo title="Metodologias"/> 

            <div className="">scrum
            <div className="">
                             agile
           </div>

        </div>
        <Titulo title="Experiencia Laboral"/> 

        <div className="">
        <div className="">

        </div>
        </div>
        </div>

   
)

}

export default Perfil