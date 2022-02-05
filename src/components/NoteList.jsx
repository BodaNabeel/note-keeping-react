import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function NoteList({ notes, setNotes, searchText }) {
  return (
    <div className="note-list">
      <Note notes={notes} searchText={searchText} setNotes={setNotes}/>
      <AddNote setNotes={setNotes} notes={notes} />
    </div>
  );
}
