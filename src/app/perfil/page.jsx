'use client'

/*HOOKS */
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '@/src/hooks/useHasMounted'

import Card2 from "@/src/components/Card2"
import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"

const Perfil=()=>{
    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className="spinner"></div>
      </div>;

      }
return (
    
    <div className="text-center">
            <Image  className="bg-white" imageUrl='https://www.queestudiar.org/wp-content/uploads/2020/06/cursos.jpg'>
                <h1 className="sm:text-5xl sm:m-20">Mi camino hacia el crecimiento continuo.Siempre en constante evolución.</h1>
                <h1 className="text-center sm:m-20 sm:text-2xl  font-medium leading-tight text-[#ffffff] "> 
                Busco el crecimiento constante y desarrollo profesional en mi campo. Me esfuerzo por aprender 
                a través de proyectos personales, programas de capacitación y certificación
                </h1>
                </Image>

             <Titulo  title="Educación"/>

            <div className="flex justify-center m-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
             <Card2
             imageUrl="https://nearshoreamericas.com/wp-content/uploads/2021/11/oracle.jpg"
             imageAlt="ORACLE ONE"
             Descripcion="Alumno One Oracle Developer Backend Java"
             DescripcionMobile="Alumno One Oracle Developer Backend Java"
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
            <Card2
             imageUrl="https://aprende.com/wp-content/uploads/2022/05/herramientas-reparacion-computadoras.jpg"
             imageAlt="Repacion de computadoras"
             Descripcion="Tecnico en reparacion de computadoras y soporte de software"
             DescripcionMobile="Tecnico en reparacion de computadoras"
             />

            <Card2
             imageUrl="https://www.browserstack.com/blog/content/images/size/w1000/2020/08/API-Blog-Hero-banner-@2x.png"
             imageAlt="Web Api"
             Descripcion="Web api Codigo facilito"
             DescripcionMobile="Web api Codigo facilito"
             />  

            <Card2
             imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--a67XH0QN--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png"
             imageAlt="Frontend Developer"
             Descripcion="Frontend Developer"
             DescripcionMobile="Frontend Developer"
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
             DescripcionMobile="Scrum: Entrega continua en sprints cortos."
             />

            <Card2
             imageUrl="https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2020/08/metodologia_xp-1024x576.png "
             imageAlt="Metodologia XP "
             Descripcion="Metodologia XP Desarrollo ágil con calidad y comunicación efectiva en equipo"
             DescripcionMobile=" Desarrollo ágil con calidad y comunicación en equipo."
             />
            </div>
        </div>

        
        <Titulo title="Experiencia Laboral"/> 

        <div className="flex justify-center m-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
            
            <Card2
             imageUrl="data:image/png;base64,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"
             imageAlt="CONOVATEC"
             Descripcion="Voluntariado. Developer Frontend JR."
             DescripcionMobile="Voluntariado. Developer Frontend JR."
             /> 

            <Card2
             imageUrl="https://aprende.com/wp-content/uploads/2022/05/herramientas-reparacion-computadoras.jpg "
             imageAlt="Reparador de computadoras"
             Descripcion="Tecnico en reparacion de computadoras y soporte de software"
             DescripcionMobile="Tecnico de equipo de computo."
             />

            <Card2
             imageUrl="https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/332855493_1876814226023489_3152594314921860656_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pkRx_whOSJkAX9voBDw&_nc_ht=scontent.fgua9-2.fna&oh=00_AfCN6Cip76wDb-NJ9wSEQGY3Fw-GaxJO0JDVwA96ckwkBw&oe=64553A6C"
             imageAlt="Asistente de CCTV"
             Descripcion="Asistente de sistema de soporte, tecnico e instalación de CCTV."
             DescripcionMobile="Asistente de sistema de soporte de CCTV."
             /> 

            <Card2
             imageUrl="https://www.prensalibre.com/wp-content/uploads/2021/12/CBC2_NOTA_CSTUDIO_0000_Layer-2-1.jpeg?quality=52"
             imageAlt="Area Operacional CBC"
             Descripcion="Area de Producción y operaciones"
             DescripcionMobile="Area de Producción y operaciones"
             /> 

            <Card2
             imageUrl="https://www.cartogua.com/wp-content/uploads/2014/06/LogoCartonesWeb3.jpg"
             imageAlt="Area Operacional Cartones de Guatemala"
             Descripcion="Area de Producción y operaciones"
             DescripcionMobile="Area de Producción y operaciones"
             /> 
           

            </div>
        </div>


        <Titulo title="Tiempo Libre"/> 

<div className="flex justify-center m-14">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">

        <Card2
         imageUrl="https://cdn-3.expansion.mx/dims4/default/751df04/2147483647/strip/true/crop/1254x836+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F23%2F02%2F062b88e04f0b9ddb490703868f80%2Fideas-proyectos.jpg"
         imageAlt="Programar"
         Descripcion="Practicar en proyectos personales"
         DescripcionMobile="Practicar en proyectos personales"
         /> 

        <Card2
         imageUrl="https://www.exact.com.pe/assets/uploads/noticias/la-importancia-del-control-de-documentos.jpg"
         imageAlt="Leer"
         Descripcion="Leer blogs,libros de programacion y documentación"
         DescripcionMobile="Leer y adquirir conocimientos"
         />     

        <Card2
         imageUrl="https://formaciononline.eu/wp-content/uploads/2019/01/cursos-online-gratuitos.png"
         imageAlt="Adquirir conocimientos"
         Descripcion="Tomar cursos y certificaciones en línea"
         DescripcionMobile="Tomar cursos y certificaciones en línea"
         />   
        
      <div className='mb-8'>
        <Card2
        imageUrl="https://bootcamp-9pmn.onrender.com/cat.svg"
        imageAlt="Enseñar a la comunidad"
        Descripcion="Compartir conocimientos con la comunidad"
        DescripcionMobile="Compartir conocimientos con la comunidad"
       />  
     </div>
    </div>
  </div>
 </div>

   
)

}

export default Perfil;