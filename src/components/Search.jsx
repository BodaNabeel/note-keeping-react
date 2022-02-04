import React from 'react';

export default function Search({setSearchText}) {
  return <div>
      <input type="text" placeholder='search notes..' onChange={(e) => setSearchText(e.target.value)} />
  </div>;
}
