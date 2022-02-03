import React from "react";
import Note from "./Note";

export default function NoteList({ note }) {
  return (
    <div className="note-list">
      {note.map((note) => {
        return <Note id={note.id} text={note.text} />;
      })}
    </div>
  );
}
