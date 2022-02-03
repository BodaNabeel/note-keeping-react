import React from 'react';

export default function AddNote() {
  return (
      <>
      <div className="add-note">
          <textarea className='add-note_textarea' name="" id="" cols="30" fixed rows="10" placeholder='enter new note...' maxLength={100}></textarea>
          <button className='btn-special'>add</button>
      </div>
      </>
  );
}


