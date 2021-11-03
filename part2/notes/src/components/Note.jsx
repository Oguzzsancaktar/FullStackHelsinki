const Note = (props)=> {
  return(
    <div>
     {props.note} <button onClick={props.toggleImportance}> { 1 ? "important": "not"} </button>
    </div>
  )
}

export default Note;