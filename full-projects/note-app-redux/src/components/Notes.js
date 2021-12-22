import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducer"


const Note = ({ handleClick, note }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}


const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state)


  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} handleClick={() => toggleImportance(note.id)} />
        )}
      </ul>
    </div>
  )
}

export default Notes