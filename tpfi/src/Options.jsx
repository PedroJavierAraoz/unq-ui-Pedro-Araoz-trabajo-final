
const Opciones= (props)=>{
    return (
    <div>
        {props.data.map(dataElement=>{
           return(
           <button className= "btn btn-primary btn-lg btn-block"  
                   name={dataElement}> {dataElement} </button>
        )})
        }
    </div>
    )
}
export default Opciones;   
    