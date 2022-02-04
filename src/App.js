import { useState } from "react";
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";

function App() {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning re!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
    {
      text: "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      id: uuidv4(),
    },
  ]);
  return (
    <>
      <Search setSearchText={setSearchText} />
      <NoteList
        notes={notes.filter((notes) =>
          notes.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        setNotes={setNotes}
      />
    </>
  );
}

export default App;
