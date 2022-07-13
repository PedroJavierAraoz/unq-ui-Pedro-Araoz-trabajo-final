import './App.css';
import Header from './Header'
import DisplayImage from './DisplayImage'
import Score from './Score'
import {useState} from 'react';


const evalPlay= (j1,j2)=>{
if (j1 ===j2) return "Empate"
let gana = "Jugada1"
switch (j1){
  case "Piedra": if (j2==="Spock" || j2=== "Papel") 
                    gana ="Jugada2"
                  break;
  case "Papel": if (j2==="Lagarto" || j2=== "Tijera") 
                    gana ="Jugada2"
                  break;
  case "Tijera": if (j2==="Spock" || j2=== "Piedra") 
                    gana ="Jugada2"
                  break;
  case "Lagarto": if (j2==="Tijera" || j2=== "Piedra") 
                    gana ="Jugada2"
                  break;
  case "Spoke": if (j2==="Lagarto" || j2=== "Papel") 
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
const Resume = (props)=>{
  const{j1,j2, estado}= props

  return(
    <div class="row">
      <div class="col">
        <h1>{j1}</h1>
      </div>
      <div class="col">
        <h1> {estado} </h1>
      </div>
      <div class="col">
      <h1> {j2}</h1>
      </div>
  </div>
  )

}
const  App= ()=> {
  const [jugador1, setJugador1]= useState("")
  const [jugador2, setJugador2]= useState("")
  const [counter1, setCounter1]= useState(0)  
  const [counter2, setCounter2]= useState(0)  
  const [respuesta, setRespuesta]= useState("")
  
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
    if (estado==="Jugada1") {
      setCounter1(counter1+1)
      setRespuesta("Gana contra")
    }else
    if (estado==="Jugada2") {
      setCounter2(counter2+1)
      setRespuesta("Pierde contra")
     } else{setRespuesta("Iguala con")}

  }

  return (
      <div className="container App">
        <Header className=" App-header" handleReset={handleClickReset}>  </Header>
        <Score score1={counter1} score2={counter2}/> 
    
     
        <div className="row">
          <div className="col">
            <div>  
              <button  onClick={handleClick} name= "Piedra" className= "btn btn-primary btn-lg btn-block" >Piedra</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Papel"className= "btn btn-primary btn-lg btn-block" >Papel</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Tijera" className= "btn btn-primary btn-lg btn-block" >Tijera</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Lagarto" className= "btn btn-primary btn-lg btn-block">Lagarto</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Spock" className= "btn btn-primary btn-lg btn-block" >Spock</button> 
            </div> 
          </div>

          <div className="col-8 App-Image ">
            <div className="row align-items-center">
              <div className="col">
                <DisplayImage jugada={jugador1} message= "Seleccione una jugada" side="left"/>
              </div> 
              <div className="col">
                <DisplayImage jugada={jugador2} message= "" side="rigth"/>
              </div> 
            </div>
          </div>
          <div className="col">
          </div>
        </div>
     
      <br/>
      <br/>

      <Resume j1={jugador1} j2={jugador2} estado={respuesta} />
    </div>
  );
}

export default App;
