import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducer"
import noteService from "../services/notes"


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
  const notes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state.filter === 'IMPORTANT'
      ? state.notes.filter(n => n.important)
      : state.notes.filter(n => !n.important) 
  })

  const toggleImportance = async (note) => {
    const updatedNote = await noteService.update({...note , important:!note.important})
    dispatch(toggleImportanceOf(updatedNote))
  }

  return (
    <div>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} handleClick={() => toggleImportance(note)} />
        )}
      </ul>
    </div>
  )
}

export default Notes