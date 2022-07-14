import './App.css';

const DisplayImage = (props) => {
    const {jugada, side}=props;
    if (jugada !== "" )
        return <img src= {"./image/"+jugada+"-"+side+".jpg"} width= "200" height="200" alt = "jugada"></img>;
    return <h3 className="message">{props.message}</h3>
  };
  export default DisplayImage