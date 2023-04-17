import {HiOutlineDocumentDownload} from 'react-icons/hi'


const Navigation =()=>{
    return(

        
        <>
           
             

             
<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://www.linkedin.com/in/miguel-enrique-alvarez-merlos-9b6703248" class="flex items-center">
            <img  src="https://media.licdn.com/dms/image/D4E22AQF9c5almTdLqQ/feedshare-shrink_800/0/1674802038718?e=1677715200&v=beta&t=7e79zqXJSDQVMKykHIDrQHOUwK0UNvlWwhGJdafJLMI" class="h-6 mr-3 sm:h-9 rounded" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-[24px] dark:text-white ">Enrique Merlos  </span>
        </a>
        <div class="flex items-center">
            <a href="tel:30577089" class="mr-6 text-base font-medium text-gray-500  dark:text-white hover:underline">(502) 3057-7089</a>
            <a href="/CV MIGUEL ENRIQUE ALVAREZ MERLOS.pdf" download class="flex border border-[#1a30f5] px-4 py-1 text-[#0b3ed9dd] rounded-full items-center gap-2 hover:bg-blue-700 hover:underline hover:text-white transition animate-bounce">Descargar Cv <HiOutlineDocumentDownload/></a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                 </li>
                <li>
                    <a href="/acerca" class="text-gray-900 dark:text-white hover:underline">Acerca</a>
                </li>
                
                      <li>
                    <a href="/perfil" class="text-gray-900 dark:text-white hover:underline">Perfil</a>
                </li>
                      <li>
                    <a href="/herramientas" class="text-gray-900 dark:text-white hover:underline">Herramientas</a>
                </li>
                    <li>
                    
                    <a href="/proyectos" class="text-gray-900 dark:text-white hover:underline">Proyectos</a>
                </li>
                
                
                <li>
                    <a href="/contactame" class="text-gray-900 dark:text-white hover:underline">Contactame</a>
                </li>
                
                
            </ul>
          
        </div>
          
    </div>
 
</nav>



            </>
        

        
    )

}


export default Navigation 