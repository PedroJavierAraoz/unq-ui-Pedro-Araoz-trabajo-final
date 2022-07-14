import './Header.css';


const Header = (props)=>{
    
    return(
        <div className="container Header-App">
            <div className="row align-items-center">
                <div className="col">
                </div>
                <div className="col-8 align-self-center">
                    <h1>
                        Juega a PPTLS
                    </h1>
                </div>
                <div className="col align-self-end">
                    <button  className= "btn btn-primary btn-lg " onClick={()=>props.handleReset()}>
                        Reiniciar
                    </button>
                </div>
            </div>
        </div>
    )

};
export default Header;