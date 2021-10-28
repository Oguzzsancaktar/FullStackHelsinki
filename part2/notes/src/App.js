import { useState , useEffect } from "react";
import Note from "./components/Note.jsx";
import axios from 'axios'
// import NoteForm from "./NoteForm";
// import NoteList from "./NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("new note is it");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  
    useEffect(() => {
    axios.get('http://localhost:3001/notes').then((res)=>{
      setNotes(res.data)
    })      
    }, [])

  const addNewNote = (event) => {
    event.preventDefault();

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    axios.post('http://localhost:3001/notes', noteObject).then((res)=>{
      console.log(res);
    })      

    setNewNote("");
    setNotes(notes.concat(noteObject));
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
  }

  return (
    <div>
      <h1>Example 2 Note List </h1>

      <button onClick={()=> setShowAll(!showAll)}>
          Show {showAll ? 'important': 'all'}
      </button>

      {notesToShow.map((note, index) => (
        <Note key={index} note={note.content}   toggleImportance={() => toggleImportanceOf(note.id)} />
      ))}

      <form>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit" onClick={addNewNote}>
          {" "}
          Add New Note{" "}
        </button>
      </form>
    </div>
  );
};

export default App;
