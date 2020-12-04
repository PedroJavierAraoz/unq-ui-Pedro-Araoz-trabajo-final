import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const Resultado= (props)=>{
  return(
    <button>resultado : {props.estado}</button>
  )
}

const App= ()=> {

  const [Jugador1, setJugador1]= useState("");
  const [Jugador2, setJugador2]= useState("");
  const [Estado, setEstado]= useState("Iguales");


  const handleClick= (event)=>{
    const {name}= event.target
    const j2= selectPlay()
    setJugador1(name);
    setJugador2(j2);
    evaluar(Jugador1,Jugador2);
  }
  
  const clickSpock= (event)=>{
    const j2= selectPlay()
    setJugador1("Spock");
    setJugador2(j2);
    evaluar(Jugador1,Jugador2);
  }

  const evaluar= (J1, J2) =>{
    let res= "Ganador 1"
    if (J1===J2) {
      setEstado("Iguales")     
      return }
    switch (J1) {
      case "Piedra" : 
        if (J2==="Papel" || J2==="Spock") res="Ganador 2"
        break;
      case "Papel" : 
        if (J2==="Tijera" || J2==="Lagarto") res="Ganador 2"
        break;
      case "Tijera" : 
        if (J2==="Spock" || J2==="Piedra") res="Ganador 2"
        break;
      case "Lagarto" : 
        if (J2==="Piedra" || J2==="Tijera") res="Ganador 2"
        break;
      case "Spock" : 
        if (J2==="Papel" || J2==="Lagarto") res="Ganador 2"
        break;
      }
  setEstado(res);    
  return 

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
      default : ret =""  
    }
    return ret
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>  
        <button  onClick= {handleClick} name= "Piedra">Piedra</button> 
      </div>
      <div>  
       <button  onClick= {handleClick} name ="Papel" >Papel</button> 
      </div>
      <div>  
        <button  onClick= {handleClick} name ="Tijera" >Tijera</button> 
      </div>
      <div>  
        <button  onClick= {handleClick} name ="Lagarto" >Lagarto</button> 
      </div>
      <div>  
       <button  onClick= {handleClick} name ="Spock" >Spock</button> 
      </div> 
      <br/>
      <br/>
   
      <div>Jugador1 : {Jugador1}</div>
      <div>adversario  :{Jugador2}</div>
      
      <Resultado estado={Estado}/>
    </div>
  );
}

export default App;
