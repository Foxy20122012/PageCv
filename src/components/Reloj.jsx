import DateReloj from "./DateReloj";


export  function CurrentTime(){
    let date =new Date();
    let horas= date.getHours();
}

console.log(CurrentTime);

const Reloj =()=>{
     return(
        <>
            <h1 className="text-center m-10 ">Este sera un reloj</h1>

            <div className="text-center">
            <div className="flex w-96 items-center h-96  justify-center border-4 border-violet-300  rounded-full font-mono font "></div>
            
            </div>
            
        </>
     )

}

export default Reloj 