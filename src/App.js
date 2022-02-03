import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [note, setNote] = useState([
    {
      noteInfo:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 1,
    },
    {
      noteInfo:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 2,
    },
    {
      noteInfo:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 3,
    },
    {
      noteInfo:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 4,
    },
    {
      noteInfo:
        "i'm learning reactjs and i's really fun and i'm enjoying the process on the way yooo!!!",
      noteID: 5,
    },
  ]);
  return (
    <>
      <NoteList/>
    </>
  );
}

export default App;
