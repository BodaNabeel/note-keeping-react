import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const initalValue = [
    {
      text: "It's a dummy note",
      id: uuidv4(),
    },
  ];
  const [notes, setNotes] = useLocalStorage("notes", initalValue);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="flex-wrapper">
        <div className="main-content">
          <Search setSearchText={setSearchText} />
          <NoteList
            notes={
              notes.length > 0
                ? notes.filter((notes) =>
                    notes.text.toLowerCase().includes(searchText.toLowerCase())
                  )
                : []
            }
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
