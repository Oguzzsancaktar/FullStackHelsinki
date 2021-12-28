import noteService from "../services/notes"

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_NOTES':
      return action.data
    case "NEW_NOTE":
      return state.concat(action.data)

    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      const newState = state.map(note => note.id === id ? changedNote : note)
      return newState
    default:
      return state
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}


export const createNote = (data) => {
  return {
    type: 'NEW_NOTE',
    data
  }
}

export const toggleImportanceOf = (data) => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data
    })
  }
}

// const generateId = () => {
//   return Math.floor(Math.random() * 1000000)
// }


export default noteReducer