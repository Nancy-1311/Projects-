import React, { useState } from 'react'

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () =>{
    if(input.trim() === "") return;
    setNotes([...notes,input]);
    setInput("");
  };

  const deleteNote = (index) =>{
    const newNotes = [...notes];
    newNotes.splice(index,1);
    setNotes(newNotes);
  };


  return (
    <div className='container1 min-h-screen bg-gradient-to-r  from-blue-300  to-purple-300 p-8'>
      <div className="container2 max-w-xl bg-white p-6 mx-auto rounded-xl shadow-md">
        <h1 className='text-2xl font-bold'>Notes App</h1>
        <div className="container3 flex">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='write a note' className='w-full  p-2 mt-5 rounded-md' />
          <button onClick={addNote} className='bg-purple-900 text-white rounded-md w-12 h-10 mx-2 mt-5'>Add</button>
        </div>
        </div>
        {notes.length > 0 && (
        <div className="container4 p-4 bg-white max-w-xl rounded-xl shadow-md m-3 mx-auto">
          {notes.map((note,index) =>(
           <div className="container5 flex">
            <span className='w-full  p-2 mt-5 rounded-md'>{note}</span>
            <button onClick={() => deleteNote(index)} className='bg-red-700 text-white rounded-md w-16  h-10 mx-2 mt-5'> Delete</button>
           </div> 
          ))}
        </div>
        )}
      </div>
        
  )
}

export default Notes
  