
const  DateReloj=()=>{

    let date =new Date();
    let horas= date.getHours();
    let minutos= date.getMinutes();
    let segundos= date.getSeconds();

    horas =(horas<10)? "0" + horas : horas;
    minutos =(minutos<10)? "0" + minutos : minutos;
    segundos =(segundos<10)? "0" + segundos : segundos;

    let time = horas + ":" + minutos + ":" + segundos;


    return(
<h1>horas</h1>
   

    )
  
    
}


export default DateReloj