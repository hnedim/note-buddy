import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {notes.map((note) => {
        return (
          <div className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
