import Cards from "@/src/components/Cards"
import Image from "@/src/components/Image"




const Herramientas =()=>{
    return (
        <>

<Image  className="bg-white" imageUrl='https://img.freepik.com/vector-premium/concepto-banner-web-desarrollo-frontend-interfaz-sitio-web_277904-4191.jpg?w=2000'>
                <h1 className="text-5xl m-20">Bienvenido a mi apartado de Herramientas</h1>
                <h1 className="text-center m-20 text-2xl  font-medium leading-tight text-[#ffffff] ">"Bienvenido querido usuario,
                aquí podrás conocer algunos de los lenguajes de programación, entornos de desarrollo, herramientas, frameworks y gestores de bases
                 de datos con los que he tenido la oportunidad de trabajar y aprender durante mi formación como estudiante de Ingeniería en Sistemas.
                  Aunque soy un estudiante, estoy comprometido a seguir aprendiendo y mejorando mis habilidades para convertirme en un desarrollador
                   web cada vez más eficiente. ¡Espero que disfrutes explorando mis habilidades y herramientas!"</h1>
                </Image>

            

        <div className="flex justify-center m-14 ">
            <Cards
  imageUrl='https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg'
  imageAlt='Javascript'
  title='Javascript'
  description='JavaScript es un lenguaje de programación interpretado, dialecto del estándar 
   ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado 
   y dinámico.JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas
    web interactivas.'
   linkUrl='https://developer.mozilla.org/es/docs/Web/JavaScript'
/>


<Cards 
  imageUrl='https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
  imageAlt='React.js'
  title='React.js'
  description='React es una biblioteca Javascript de código abierto diseñada para 
  crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones 
  en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto 
  hay más de mil desarrolladores libres. '
  linkUrl='https://reactjs.org/'
/>
<Cards 
  imageUrl='https://nextjs.org/static/blog/next-13/twitter-card.png'
  imageAlt='Next.js'
  title='Next.js'
  description='Next.js es un marco web de desarrollo front-end de React de
   código abierto creado por Vercel que habilita funcionalidades como la representación 
   del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas
    en React.'
  linkUrl='https://nextjs.org/docs/api-reference/create-next-app'
/>

</div>

        <div className="bg-teal-400 m-5 h-[23px] w-full translate-y-2 translate-x-2"> </div>

<div className="flex justify-center m-14 ">
            <Cards
  imageUrl='https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png'
  imageAlt='Css'
  title='Css'
  description='CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico
   para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​'
  linkUrl='https://developer.mozilla.org/es/docs/Web/CSS'
/>


<Cards 
  imageUrl='https://techbeacon.com/sites/default/files/styles/social/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=R3pMKIzh'
  imageAlt='Html5'
  title='Html5'
  description='HTML 5 es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 específica
   dos variantes de sintaxis para HTML: una «clásica», HTML, conocida como HTML5, y una variante XHTML conocida como 
   sintaxis XHTML 5 que deberá servirse con sintaxis XML.'
  linkUrl='https://lenguajehtml.com/html/'
/>
<Cards 
  imageUrl='https://joseordaz.com/wp-content/uploads/2021/12/tailwind-pre.png'
  imageAlt='TailwindCss'
  title='TailwindCss'
  description='Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.
   La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera
    una serie de clases predefinidas para elementos como botones o tablas.'
  linkUrl='https://tailwindcss.com/docs/installation'
/>

</div>

<div className="bg-teal-400 m-5 h-[23px] w-full translate-y-2 translate-x-2"> </div>

<div className="flex justify-center m-14">
            <Cards
  imageUrl='https://www.freecodecamp.org/news/content/images/2022/07/git-github.png'
  imageAlt='Git'
  title='Git y Github'
  description='Git es un sistema de control de versiones distribuido: seguimiento de cambios
   en cualquier conjunto de archivos, generalmente utilizado para coordinar el trabajo entre
    programadores que desarrollan en colaboración el código fuente durante el desarrollo del software.'
  linkUrl='https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub'
/>


<Cards 
  imageUrl='https://www.pngitem.com/pimgs/m/718-7189867_oracle-logo-png-transparent-png.png'
  imageAlt='Oracle'
  title='Oracle'
  description='Oracle se encarga de la gestión de bases de datos, la gestión del almacenamiento, la alta 
  disponibilidad y la escalabilidad, lo que ayuda a los desarrolladores a concentrarse en la entrega de 
  saplicaciones de alto rendimiento.'
  linkUrl='https://www.oracle.com/lad/'
/>
<Cards
  imageUrl='https://miro.medium.com/max/1400/1*oBm_3saYz4AI_MS6OekdFQ.png'
  imageAlt='Vercel'
  title='Vercel'
  description='Vercel es una plataforma de “deploy” y alojamiento web que, a grandes rasgos, permite publicar aplicaciones web, mediante un 
  sistema de desarrollo e integración contínua.
   Eso significa que, conforme avanzas en la creación de tu web, puedes desplegar cada nueva versión de forma totalmente automatizada.'
  linkUrl='https://vercel.com/'
/>

</div>

<div className="bg-teal-400 m-5 h-[23px] w-full translate-y-2 translate-x-2"> </div>

<div className="flex justify-center m-14 ">
            <Cards
  imageUrl='https://significado.com/img/tecnologia/linux-pinguino-tecnologia.jpg'
  imageAlt='Gnu'
  title='Sistemas Gnu/Linux'
  description='GNU/Linux, ​ es un sistema operativo tipo Unix compuesto por software libre y de
   código abierto.​ GNU/Linux surge de las contribuciones de varios proyectos de software, entre
    los cuales destacan GNU y el kernel «Linux».​'
  linkUrl='https://aulasoftwarelibre.github.io/install-party-doc/GNU-linux/definition/'
/>
<Cards
  imageUrl='https://res.cloudinary.com/practicaldev/image/fetch/s--ummPlX9Q--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2y7xmc8sqyjfbwjicul7.png'
  imageAlt='Sql'
  title='MySQL'
  description='MySQL Workbench es una herramienta visual de diseño de bases de datos que integra desarrollo de software,
   administración de bases de datos, diseño de bases de datos, gestión y mantenimiento para el sistema de base de datos MySQL.'
  linkUrl='https://www.mysql.com/products/workbench/'
/>
<Cards 
  imageUrl='https://miro.medium.com/max/480/1*MGcLJS1ZvMFcBA94PXn16Q.png'
  imageAlt='Vscode'
  title='Visual Studio Code'
  description='Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web.
   Incluye soporte para la depuración, control integrado
   de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.'
  linkUrl='https://code.visualstudio.com/'
/>
</div>

<div className="flex justify-center text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <h1 className="text-2xl font-medium text-center hover:underline">Proximamente Nuevas Herramientas...</h1>
  
</div>
    <p className="text-base leading-relaxed text-center text-gray-900 hover:underline">"Actualmente se siguen aprendiendo 
    nuestros conocimientos en diferentes entornos y herramientas para poder brindar un mayor servicio a los usuarios y entidades. Entre los 
    cuales destacan los siguientes mostrados en este apartado. Dichos conocimientos están actualmente en formación y estamos ansiosos de poder
     compartirlos con ustedes próximamente. Por favor, no dude en ponerse en contacto con nosotros si tiene alguna pregunta o si está interesado 
     en trabajar juntos en un futuro proyecto.".
     </p>
     <div className="flex justify-center m-14 ">
            <Cards
  imageUrl='https://www.qualitydevs.com/wp-content/uploads/2021/05/PHP-Quality-Devs-1-1288x724.jpg'
  imageAlt='php'
  title='Php'
  description='PHP es un lenguaje de programación interpretado​ del lado del servidor y de uso general que se
   adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf
    en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group​'
  linkUrl='https://www.php.net/manual/es/intro-whatis.php'
/>
<Cards
  imageUrl='https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg'
  imageAlt='typescript'
  title='Typescript'
  description='TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft.
   Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg,
    diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.'
    linkUrl='https://www.typescriptlang.org/'
/>

</div>
        </>
    )
}

export default Herramientas