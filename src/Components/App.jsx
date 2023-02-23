import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [NotesList, setNotesList] = useState([]);
  function addNote(note) {
    setNotesList((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(id) {
    console.log(id);
    setNotesList((prev) => {
      return prev.filter((note, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {NotesList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
