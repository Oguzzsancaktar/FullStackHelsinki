const Note = (props)=> {
  return(
    <div>
     {props.note} <button onClick={props.toggleImportanceOf}> { 1 ? "important": "not"} </button>
    </div>
  )
}

export default Note;