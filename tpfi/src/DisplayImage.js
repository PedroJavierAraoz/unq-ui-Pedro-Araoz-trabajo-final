

const DisplImage = (props) => {
    const {jugada, side}=props;
    if (jugada !== "" )
        return <img src= {"./image/"+jugada+"-"+side+".jpg"} width= "200" height="200" alt = "jugada"></img>;
    return <h6>{props.message}</h6>
  };
  export default DisplImage