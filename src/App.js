// src/App.js
import React, { useState } from 'react';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { text: newNote, completed: false }]);
      setNewNote('');
    }
  };

  const handleNoteComplete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed; // Toggle completion status
    setNotes(updatedNotes);
  };

  const handleNoteDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
  <h1 className="text-2xl font-bold mb-4">Notekeeper</h1>
  <div className="mb-4">
    <input
      type="text"
      placeholder="Add a new note"
      className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      value={newNote}
      onChange={(e) => setNewNote(e.target.value)}
    />
    <div className="mt-2">
      <button
        className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={handleAddNote}
      >
        Add
      </button>
    </div>
  </div>
  <div>
        {notes.map((note, index) => (
          <Note
            key={index}
            text={note.text}
            completed={note.completed}
            onNoteComplete={() => handleNoteComplete(index)}
            onNoteDelete={() => handleNoteDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
