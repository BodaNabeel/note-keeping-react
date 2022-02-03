import React from "react";
import Note from "./Note";

export default function NoteList({ notes, setNotes }) {
  return (
    <div className="note-list">
      <Note notes={notes} setNotes={setNotes}/>
    </div>
  );
}
