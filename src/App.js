import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [note, setNote] = useState([
    {
      text:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 1,
    },
    {
      text:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 2,
    },
    {
      text:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 3,
    },
    {
      text:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 4,
    },
    {
      text:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 5,
    },
  ]);
  return (
    <>
      <NoteList note={note}/>
    </>
  );
}

export default App;
