import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [note, setNote] = useState(null);
  return (
   <>
  <NoteList/>
   </>
  );
}

export default App;
