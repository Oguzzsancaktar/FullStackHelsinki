
const Button = ({handleEvent , eventText})=>{
  return(
    <button onClick={handleEvent}>
    {eventText}
    </button>
  )
}


export default Button;