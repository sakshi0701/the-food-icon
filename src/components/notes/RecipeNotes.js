import React, { useState, useEffect } from "react";
import "./notes.css";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Count from "./count";
import Navbar from "../Navbar/navbar";
import useLocalStorage from "../../hooks/useLocalStorage";

function RecipeNotes(props) {

  const [note, setNote] = useLocalStorage('note', '');

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note))
  },[note])

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {

    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prev) => {
      return [...prev.filter((i, index) => index !== id)];
    });
  }

  return (
    <div className="recipe-notes">
      <Navbar />
      <div className="notes">
        <div className="count">
          <Count
            count={
              notes.length === 0
                ? "No Notes to show"
                : `${notes.length} Notes`
            }
          />
        </div>

        <CreateArea className="form" onAdd={addNote} />
        {notes.map((n, index) => (
          <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}
            onDelete={deleteNotes}
            value={note}
            onChange={setNote}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeNotes;