import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim() === '') return;
    setNotes([...notes, input]);
    setInput('');
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 p-4 flex justify-center items-start">
      <div className="w-full max-w-xl space-y-6">
        {/* Header and Input */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Notes App</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a note"
              className="flex-1 p-2 rounded-md border"
            />
            <button
              onClick={addNote}
              className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Notes List */}
        {notes.length > 0 && (
          <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
              >
                <span className="flex-1 p-2 bg-gray-100 rounded-md text-gray-800">{note}</span>
                <button
                  onClick={() => deleteNote(index)}
                  className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
