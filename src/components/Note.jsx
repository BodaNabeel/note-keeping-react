import React from "react";
export default function Note({ id, text, notes, setNotes }) {
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
            <button
              className="note-btn"
              onClick={() => {
                handleDelete(el.id);
              }}
            >
              del
            </button>
          </div>
        );
      })}
    </>
  );
}
