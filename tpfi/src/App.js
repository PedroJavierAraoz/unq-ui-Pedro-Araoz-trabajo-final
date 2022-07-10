import './App.css';
import {useState} from 'react';


function Resultado(props) {
return(
<h1>
    {props.jugada}
</h1>
)
}

const  Score =  (props)=>{
return(
<>
      <h1>{props.score1}</h1>
      <h2>a </h2>
      <h1>{props.score2}</h1>
</>
)}

const evalPlay= (j1,j2)=>{
 
if (j1 ==j2) return "Empate"

let gana = "Jugada1";

switch (j1){
  case "Piedra": if (j2=="Spock" || j2== "Papel") 
                    gana ="Jugada2"
                  break;
  case "Papel": if (j2=="Lagarto" || j2== "Tijera") 
                    gana ="Jugada2"
                  break;
  case "Tijera": if (j2=="Spock" || j2== "Piedra") 
                    gana ="Jugada2"
                  break;
  case "Lagarto": if (j2=="Tijera" || j2== "Piedra") 
                    gana ="Jugada2"
                  break;
  case "Spoke": if (j2=="Lagarto" || j2== "Papel") 
                    gana ="Jugada2"
                  break;
  }
  return gana
}

const  selectPlay= ()=>{
  const value= Math.floor(Math.random() * 5) + 1;
  let ret = ""
  switch (value) {
    case 1:
      ret="Piedra"
      break;
    case 2:
      ret= "Papel"
      break;
    case 3:
      ret= "Tijera"
      break;
    case 4:
      ret= "Lagarto"
      break;
    case 5:
      ret= "Spock"
      break;
      default:  ret="";
 }
  return ret
}

const  App= ()=> {
  const [jugador1, setJugador1]= useState("")
  const [jugador2, setJugador2]= useState("")
  const [counter1, setCounter1]= useState(0)  
  const [counter2, setCounter2]= useState(0)  
  
  const handleClickReset=()=>{
      setCounter1(0)
      setCounter2(0)
      setJugador1("")
      setJugador2("")
  }

  const handleClick= (event)=>{
    const {name}= event.target;
    let jugada1=name
    setJugador1(jugada1)    

    let jugada2= selectPlay()
    setJugador2(jugada2)

    const estado = evalPlay(jugada1,jugada2)
    if (estado=="Jugada1") setCounter1(counter1+1)
    if (estado=="Jugada2") setCounter2(counter2+1)

  }

  return (
    <div className="App">
      <div>  
              <button  onClick={handleClickReset} name= "Reset" className= "btn btn-primary btn-lg btn-block" >Reset</button> 
      </div>

      <div>  
              <button  onClick={handleClick} name= "Piedra" className= "btn btn-primary btn-lg btn-block" >Piedra</button> 
      </div>
      <div>  
              <button  onClick={handleClick} name= "Papel" className= "btn btn-primary btn-lg btn-block" >Papel</button> 
      </div>
      <div>  
              <button  onClick={handleClick} name= "Tijera" className= "btn btn-primary btn-lg btn-block" >Tijera</button> 
      </div>
      <div>  
              <button  onClick={handleClick} name= "Lagarto" className= "btn btn-primary btn-lg btn-block" >Lagarto</button> 
      </div>
      <div>  
              <button  onClick={handleClick} name= "Spock" className= "btn btn-primary btn-lg btn-block" >Spock</button> 
      </div>
     
   <Score score1={counter1} score2={counter2}/> 
  <Resultado jugada={jugador1}></Resultado>
  <h1> gana / poerde contra</h1>
  <Resultado jugada={jugador2}></Resultado>

    </div>
  );
}

export default App;
