import './App.css';
import {useState} from 'react';


function Resultado(props) {
return(
<h1>
    {props.jugada}
</h1>
)
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


  const handleClick= (event)=>{
    const {name}= event.target;
    setJugador1(name)    
    setJugador2(selectPlay)
    console.log("Jugador 1: ", jugador1)
    console.log("Jugador 2: ", jugador2)
  }

  return (
    <div className="App">
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
     
     
  <Resultado jugada={jugador1}></Resultado>
  <h1> gana / poerde contra</h1>
  <Resultado jugada={jugador2}></Resultado>

    </div>
  );
}

export default App;
