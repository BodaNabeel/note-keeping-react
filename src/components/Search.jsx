import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search({ setSearchText }) {
  return (
    <div className="search-handler">
      <FiSearch />
      <input
        type="text"
        placeholder="search notes.."
        className="search-handler__input"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
