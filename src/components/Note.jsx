import React from "react";
// import AiTwotoneDelete from "react-icons/ai"
import { MdDelete } from "react-icons/md"
export default function Note({  notes, setNotes }) {
  const handleDelete = (key) => {
    const updatedNotes = notes.filter((notes) => notes.id !== key);
    setNotes(updatedNotes);
  };

  return (
    <>
      {notes.map((el) => {
        return (
          <div key={el.id} className="note">
            <p className="note-text">{el.text}</p>
              <MdDelete className="note-btn" onClick={() => {handleDelete(el.id)}} />
          </div>
        );
      })}
    </>
  );
}
