import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNote({ notes, setNotes }) {
  const textarea = useRef();
  const [text, setText] = useState();
  const getValue = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    if (textarea.current.value.trim().length > 0) {
      setNotes((prevState) => {
        return [
          ...prevState,
          {
            text: text,
            id: uuidv4(),
          },
        ];
      });
      textarea.current.value = "";
    } else {
      alert("note can't be blank");
    }
  };
  return (
    <>
      <div className="add-note">
        <textarea
          ref={textarea}
          className="add-note_textarea"
          cols="30"
          rows="10"
          maxLength="200"
          onChange={(e) => {
            getValue(e);
          }}
          placeholder="enter new note..."
        ></textarea>
        <button className="btn-special" onClick={handleAdd}>
          add
        </button>
      </div>
    </>
  );
}
