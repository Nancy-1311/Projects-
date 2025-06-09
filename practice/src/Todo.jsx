import React, { useState } from 'react';
import addButton from '../src/images/add.png';

const Todo = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim() === '') return;
    setNotes([...notes, { text: input, completed: false }]);
    setInput('');
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const CompleteTask = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    const newText = prompt('Edit your note:', notes[index].text);
    const updatedNotes = [...notes];
    if (newText !== null) {
      updatedNotes[index].text = newText;
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-sky-300 p-4 sm:p-12">
      <div className="w-full max-w-xl mx-auto bg-gray-800 rounded-md p-6 sm:p-12">
        <h1 className="text-2xl sm:text-3xl text-center text-white font-bold">Todo App</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center mt-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 rounded-md text-base"
            placeholder="Enter your task..."
          />
          <button onClick={addNote} className="flex-shrink-0">
            <img src={addButton} alt="Add" width={50} className="mx-auto sm:mx-0" />
          </button>
        </div>
      </div>

      {notes.length > 0 && (
        <div className="mt-6 space-y-4 px-2 sm:px-0">
          {notes.map((note, index) => (
            <div
              key={index}
              className="w-full max-w-xl mx-auto bg-gray-800 text-base sm:text-xl text-white font-semibold flex flex-col sm:flex-row sm:justify-between items-center p-4 sm:p-5 rounded-md space-y-2 sm:space-y-0"
            >
              <span
                className={`text-center sm:text-left break-words ${
                  note.completed ? 'text-gray-400 line-through' : ''
                }`}
              >
                {note.text}
              </span>
              <div className="flex flex-wrap justify-center sm:justify-end gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => CompleteTask(index)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  {note.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => editNote(index)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
