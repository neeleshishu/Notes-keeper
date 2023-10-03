// src/components/Note.js
import React from 'react';

const Note = ({ text, onNoteComplete, onNoteDelete, completed }) => {
  return (
    <div className={`bg-white shadow-md p-4 mb-4 flex justify-between items-center ${completed ? 'bg-green-100' : ''}`}>
      <div className={`text-lg ${completed ? 'line-through text-gray-500' : ''}`}>{text}</div>
      <div className="space-x-2">
        {completed ? (
          <span className="text-green-500 font-semibold">Completed</span>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
            onClick={onNoteComplete}
          >
            Complete
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300"
          onClick={onNoteDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
