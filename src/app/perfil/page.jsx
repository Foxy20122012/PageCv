import Card2 from "@/src/components/Card2"
import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"

const Perfil=()=>{
return (
    <div className="text-center">
            <Image  className="bg-white" imageUrl='https://www.queestudiar.org/wp-content/uploads/2020/06/cursos.jpg'>
                <h1 className="text-5xl m-20">Mi camino hacia el crecimiento continuo. Siempre en evolución</h1>
                <h1 className="text-center m-20 text-2xl  font-medium leading-tight text-[#ffffff] ">Soy estudiante de ingeniería y me apasiona el mundo de la tecnología 
                y la programación. Mi objetivo es seguir aprendiendo y desarrollándome constantemente para convertirme en un experto en mi campo. Me esfuerzo por estar siempre 
                en evolución, ya sea a través de la realización de proyectos personales o la participación en programas de capacitación y certificación. Estoy abierto a nuevas
                 oportunidades y desafíos, y estoy ansioso por ver lo lejos que puedo llegar en mi carrera.</h1>
                </Image>

             <Titulo  title="Educación"/>

            <div className="flex justify-center m-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
             <Card2
             imageUrl="https://aprende.com/wp-content/uploads/2022/05/herramientas-reparacion-computadoras.jpg"
             imageAlt="Repacion de computadoras"
             Descripcion="Tecnico en reparacion de computadoras y soporte de software"
             DescripcionMobile="Tecnico en reparacion de computadoras"
             />
                <Card2
             imageUrl="https://escueladeposgrado.edu.pe/wp-content/uploads/2020/11/Importancia-de-los-Sistema-de-Informacion-en-una-empresa-scaled.jpg"
             imageAlt="Ingenieria en Sistemas De La Informacion y Ciencias De La Computación"
             Descripcion="Ingenieria en Sistemas De La Informacion y Ciencias De La Computación"
             DescripcionMobile="Ingenieria en Sistemas De La Información"
             />

            <Card2
             imageUrl="https://educacion30.b-cdn.net/wp-content/uploads/2021/11/english-british-england-language-education-concept-1-min-978x652.jpg "
             imageAlt="Idioma Ingles Basico"
             Descripcion="Idioma Ingles Basico"
             DescripcionMobile="Idioma Ingles Basico"
             />
           
            </div>   
            </div>

             <Titulo title="Habilidades Blandas"/> 
             
             <div className="flex justify-center m-14">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">

            <Card2
             imageUrl="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/blog_obs_tendencias_e_innovacion_competencias_digitales_aprendizaje_g.purita_0.jpg "
             imageAlt="Habilidad de comunicación"
             Descripcion="Capacidad para actualizarse constantemente en nuevas tecnologías y tendencias del campo"
             DescripcionMobile="Habilidad para actualizarse en nuevas tecnologías y tendencias"
             />

            
               
            <Card2
             imageUrl="https://i0.wp.com/jalacoste.com/wp-content/uploads/2017/03/Habilidades_de_Comunicacion.jpg?resize=550%2C367&ssl=1 "
             imageAlt="trabajo en equipo"
             Descripcion="Comunicación técnica efectiva para colaborar en equipo con diferentes niveles de conocimiento."
             DescripcionMobile="Comunicación técnica efectiva en equipo"
             />

           
            <Card2
             imageUrl="https://web-static.wrike.com/blog/content/uploads/2016/06/La-importancia-de-la-gestio-n-de-proyectos-preguntas-y-respuestas-con-Robert-Kelly.jpg?av=9cca9b92e52017d677996195ca78c04a "
             imageAlt="Gestion de Proyectos"
             Descripcion="Habilidades básicas de gestión de proyectos para trabajar en equipo en proyectos de desarrollo de software."
             DescripcionMobile="Gestión de proyectos en desarrollo de software."
             />

            
            </div>
            </div>

             

            <Titulo title="Metodologias"/> 
            <div className="flex justify-center m-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">

             <Card2
             imageUrl="https://blog.hubspot.es/hubfs/media/metodologiaagile.png "
             imageAlt="Metodologia Agile"
             Descripcion="Metodología ágil para desarrollar software de manera eficiente en proyectos de gran escala"
             DescripcionMobile="Desarrollo ágil de software para proyectos eficientes"
             />

             <Card2
             imageUrl="http://www.prozessgroup.com/wp-content/uploads/2016/10/ProcesosScrumPost.jpg "
             imageAlt="Metodologia Scrum"
             Descripcion="Metodología Scrum para entrega continua de software mediante trabajo en equipo en sprints cortos."
             DescripcionMobile="Scrum: entrega continua en sprints cortos."
             />
            
            </div>
        </div>

        
        <Titulo title="Experiencia Laboral"/> 

        <div className="flex justify-center m-14">
            <div className="grid grid-cols-3">

                <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
                 <img className="rounded-t-lg" src="https://aprende.com/wp-content/uploads/2022/05/herramientas-reparacion-computadoras.jpg"  />
             </a>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Tecnico en reparacion de computadoras y soporte de software.</div>
            </div>


            <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
                 <img className="rounded-t-lg " src="https://thumbs.dreamstime.com/z/c%C3%A1mara-cctv-seguridad-hud-106798522.jpg"  />
             </a>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Asistente de soporte, tecnico e instalación de CCTV </div>
            </div>

            <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
                 <img className="rounded-t-lg" src="https://www.prensalibre.com/wp-content/uploads/2021/12/CBC2_NOTA_CSTUDIO_0000_Layer-2-1.jpeg?quality=52"  />
             </a>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "> Area de Producción y operaciones</div>
            </div>

            </div>
        </div>


        <Titulo title="Tiempo Libre"/> 

<div className="flex justify-center m-14">
    <div className="grid grid-cols-3">

        <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
    <a href="#">
         <img className="rounded-t-lg" src="https://cdn-3.expansion.mx/dims4/default/751df04/2147483647/strip/true/crop/1254x836+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F23%2F02%2F062b88e04f0b9ddb490703868f80%2Fideas-proyectos.jpg"  />
     </a>
    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">Practicar en proyectos personales</div>
    </div>


    <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
    <a href="#">
         <img className="rounded-t-lg " src="https://www.exact.com.pe/assets/uploads/noticias/la-importancia-del-control-de-documentos.jpg"  />
     </a>
    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">Leer blogs y documentación</div>
    </div>

    <div className="rounded-t-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
    <a href="#">
         <img className="rounded-t-lg" src="https://formaciononline.eu/wp-content/uploads/2019/01/cursos-online-gratuitos.png"  />
     </a>
    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">Tomar cursos y certificaciones en línea</div>
    </div>
    </div>
</div>
        </div>

   
)

}

export default Perfil