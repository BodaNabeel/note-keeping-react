import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNote({ notes, setNotes }) {
  const textarea = useRef();
  const handleAdd = () => {
      if(textarea.current.value.trim().length > 0) {
          setNotes((prevState) => {
              return [
              ...prevState,
              {
                  text: textarea.current.value,
                  id: uuidv4()
              }
          ]})
          textarea.current.value = ""
      } else {
          alert("note can't be blank")
      }
  };
  return (
    <>
      <div className="add-note">
        <textarea
          ref={textarea}
          className="add-note_textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="enter new note..."
          maxLength={200}
        ></textarea>
        <button className="btn-special" onClick={handleAdd}>
          add
        </button>
      </div>
    </>
  );
}
