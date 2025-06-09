import React, { useState } from 'react'
import addButton from '../src/images/add.png';

const Todo = () => {
const[notes,setNotes] = useState([]);
const[input,setInput] = useState("")  

const addNote = () => {
  if(input.trim()==="")return;
  setNotes([...notes,{text:input, completed:false}]);
  setInput("");
}

const deleteNote = (index) => {
  const updatedNotes = [...notes];
  updatedNotes.splice(index,1)
  setNotes(updatedNotes);
}

const CompleteTask = (index) => {
  const updatedNotes = [...notes];
  updatedNotes[index].completed = !updatedNotes[index].completed;
  setNotes(updatedNotes);
}

const editNote = (index) => {
const newText = prompt("edit your note:",notes[index].text);
const updatedNotes = [...notes];
updatedNotes[index].text = newText;
setNotes(updatedNotes);
}


  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-100 to-sky-300 p-12'>
      <div className='max-w-xl p-12 mx-auto bg-gray-800 rounded-md'>
<h1 className='text-3xl text-center text-white font-bold'>Todo App</h1>
<div className='flex gap-2 justify-center items-center'>
  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='w-full p-2 mt-5' />
  <button onClick={addNote}><img src={addButton} width={60} className='mt-5' /></button>
</div>
      </div>
{notes.length > 0 && (
  <div>
      {notes.map((note,index) => (
        <div key={index} className='max-w-xl mx-auto bg-gray-800 mt-5 text-xl text-white font-bold flex justify-between p-5 rounded-md'>
          <span className={note.completed ? "text-gray-500 line-through" : ""}>{note.text}</span>
          <div className='space-x-2'>
            <button onClick={()=>CompleteTask(index)}>Completed</button>
            <button onClick={()=>editNote(index)}>Edit</button>
            <button onClick={()=>deleteNote(index)}>delete</button>
          </div>
        </div>
      ))}
      </div>
      )}
    </div>
  )
}

export default Todo
