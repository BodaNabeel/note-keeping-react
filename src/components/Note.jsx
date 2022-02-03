import React from "react";

export default function Note({ id, text }) {
  return (
    <>
      <div className="note">
        <p className="note-text">{text}</p>
        <button>del</button>
      </div>
    </>
  );
}
