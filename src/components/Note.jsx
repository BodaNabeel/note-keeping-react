import React from "react";
// import AiTwotoneDelete from "react-icons/ai"
import { MdDelete } from "react-icons/md";
export default function Note({ notes, setNotes, searchText }) {
  const handleDelete = (key) => {
    const updatedNotes = notes.filter((notes) => notes.id !== key);
    setNotes(updatedNotes);
  };

  return (
    <>
      {notes
        .filter((note) => {
          if (searchText === "") {
            return true;
          } else if (
            note.text.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .map((el) => {
          return (
            <div key={el.id} className="note">
              <p className="note-text">{el.text}</p>
              <MdDelete
                className="note-btn"
                onClick={() => {
                  handleDelete(el.id);
                }}
              />
            </div>
          );
        })}
    </>
  );
}
