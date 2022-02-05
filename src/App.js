import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("text")) || []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className="flex-wrapper">
        <div className="main-content">
          <Search setSearchText={setSearchText} />
          <NoteList
          searchText={searchText}
            notes={notes}
            setNotes={setNotes}
          />
        </div>
        <footer>
          <span>made with ❤ by </span>
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.twitter.com/bodanabeel"
          >
            BodaNabeel
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
