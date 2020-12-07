import Header from './Header';
import './App.css';
import {useState} from 'react';

const Resultado= (props)=>{
  const {estado}= props;
  if (estado==="Ganador 1")
    return(
      <label> gana contra  </label>
  )
  if (estado==="Ganador 2")
    return(
      <label> pierde contra  </label>
  )
  
return(
  <label>  </label>
)

}


const PlayImage = (props) => {
  const {jugada, side}=props;
  if (jugada !="" )
      return <img src= {"./image/"+jugada+"-"+side+".jpg"} width= "200" height="200" ></img>;
  return <h6>{props.message}</h6>
};


const App= ()=> {

  const [Jugador1, setJugador1]= useState("");
  const [Jugador2, setJugador2]= useState("");
  const [Estado, setEstado]= useState("");
  const [Counter, setCounter]= useState([0,0]);

  const opciones = ["Piedrar", "Papel", "Tijera", "Lagarto", "Spock"]; 

  const Opciones= opciones.map(dataElement=>{
    return <div >
            <button className= "btn btn-primary btn-lg btn-block" 
                    name={dataElement}
                    > {dataElement}</button>
           </div>
  })

  const updateCount=(est)=> {
      if (est==="Ganador 1") {setCounter( [Counter[0]+1, Counter[1]]) }
        else { if (est==="Ganador 2") {setCounter( [Counter[0], Counter[1]+1]) } }
    }

  const handleClick= (event)=>{
    const {name}= event.target
    const j2= selectPlay()
  
    setJugador1(name);
    setJugador2(j2);
    const est=evaluar(Jugador1,Jugador2);
    setEstado(est);
    updateCount(est);
  }

  const evaluar= (J1, J2) =>{
    let res= "Ganador 1";
    if (J1===J2) {
      res="Iguales";
      return  res}
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
    return  res;
  }
  
  const  selectPlay= ()=>{
    const value= Math.floor(Math.random() * 5) + 1;
    console.log(value)
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
   }
    return ret
  }
  
  
  const handleReset=()=> {
        setCounter([0,0]);
        setJugador1("");
        setJugador2("");
        setEstado("");
   }
  
  return (
    <div className="container App">
      <Header className="App-header" handleReset={handleReset}>  </Header>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col">
              <h2>Jugador 1</h2>
            <div>
              <h1>{Counter[0]}</h1>
            </div>
          </div>
          <div className="col-8">
              <h2>Jugada</h2>
          </div>
          <div className="col">
            <h2>Jugador 2</h2>
            <div>
              <h1> {Counter[1]} </h1>
            </div>  
          </div>
         </div>
        
        <div className="row">
          <div className="col">
            <div>  
              <button  onClick={handleClick} name= "Piedra" className= "btn btn-primary btn-lg btn-block"> Piedra</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Papel"className= "btn btn-primary btn-lg btn-block">Papel</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Tijera" className= "btn btn-primary btn-lg btn-block">Tijera</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Lagarto" className= "btn btn-primary btn-lg btn-block">Lagarto</button> 
            </div>
            <div>  
              <button  onClick= {handleClick} name ="Spock" className= "btn btn-primary btn-lg btn-block">Spock</button> 
            </div> 
          </div>

          <div className="col-8 App-Image ">
            <div className="row align-items-end">
              <div className="col">
                <PlayImage jugada={Jugador1} message= "Seleccione una jugada" side="left"/>
              </div> 
              <div className="col">
                <PlayImage jugada={Jugador2} message= "" side="rigth"/>
              </div> 
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
      <br/>
      <br/>
   
      <div> {Jugador1} <span> <Resultado estado={Estado}/> </span>  {Jugador2}</div>
      
      
    </div>
  );
}



export default App;
