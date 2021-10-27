import { useState } from "react";
import Note from "./Note";
// import NoteForm from "./NoteForm";
// import NoteList from "./NoteList";

const NoteApp = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("new note is it");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  console.log("asd", );

  console.log(Math.random() - 0.5);

  const addNewNote = (event) => {
    event.preventDefault();

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    setNewNote("");
    setNotes(notes.concat(noteObject));
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Example 2 Note List </h1>

    <div>
      <button onClick={()=> setShowAll(!showAll)}>
          Show {showAll ? 'important': 'all'}
      </button>
    </div>

      {notesToShow.map((note, index) => (
        <Note key={index} note={note.content} />
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

export default NoteApp;
