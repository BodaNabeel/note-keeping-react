import React from "react";
export default function Note({ id, text }) {
  return (
    <>
      <div className="note" key={id} >
        <p className="note-text" id={id}>{text}</p>
        <button className="note-btn" id={id}>del</button>
      </div>
    </>
  );
}
