

const Cards =(props)=>{
    return(

       <>
        

        <div className="m-5"> 



    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
      
      <a href="#">
        <img className="rounded-t-lg" src={props.imageUrl} alt={props.imageAlt} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{props.description}</p>
        <a href={props.linkUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Leer Mas
        
        </a>
      </div>
    
      </div>
      </div>

       </> 
    )
    
}

export default Cards