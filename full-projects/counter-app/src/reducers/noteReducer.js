const noteReducer = (state = [], action) => {
  if (action.type === "NEW_NOTE") {
    return state.concat(action.data)
  }

  if (action.type === "TOGGLE_IMPORTANCE") {
    const id = action.data.id
    const noteToChange = state.find(n => n.id === id)
    const changedNote = {
      ...noteToChange,
      important:!noteToChange.important
    }

    return state.map(note => note.id !== id ? note : changedNote)
  }
}

export default noteReducer