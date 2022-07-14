
const  Score =  (props)=>{
    return(
        <div className="row align-items-center">
        <div className="col-2">
          <h3>Player1</h3>
          <div>
            <h1>{props.score1}</h1>
          </div>
        </div>
        <div className="col-8">
          <h2> </h2>
        </div>
        <div className="col-2">
          <h3>Player2</h3>
          <div>
            <h1> {props.score2} </h1>
          </div>  
        </div>
     </div>
    )};
export default Score;    