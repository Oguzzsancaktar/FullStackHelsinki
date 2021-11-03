import { useState, useEffect } from "react";
import Note from "./components/Note.jsx";
import noteServices from "./services/notes";
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
    noteServices.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNewNote = (event) => {
    event.preventDefault();

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteServices.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });

    setNewNote("");
    setNotes(notes.concat(noteObject));
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };


  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteServices.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    }).catch(error =>{
      alert(
        `The note ${note.content} was already deleted from server` 
      )
      setNotes(notes.filter((n)=> n.id !== id))
    })

  };

  return (
    <div>
      <h1>Example 2 Note List </h1>

      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "important" : "all"}
      </button>

      {notesToShow.map((note, index) => (
        <Note
          key={index}
          note={note.content}
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
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
