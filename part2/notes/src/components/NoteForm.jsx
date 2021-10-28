const NoteForm = ()=>{
  const addNewNote = (event) =>{
    event.preventDefault();
    console.log("button clicked", event.target);
  }

  return (
    <form>
      <input type="text" />
      <button onClick={addNewNote} > Add New Note </button>
    </form>
  )
}

export default NoteForm;