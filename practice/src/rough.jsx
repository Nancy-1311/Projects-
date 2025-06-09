import React, { useState } from 'react'
import addIcon from '../src/images/add.png';
import deleteIcon from '../src/images/delete.png';
import editIcon from '../src/images/edit.png';
import completeIcon from '../src/images/check2.png';

const Todo = () => {
const[notes,setNotes] = useState([]);
const[input,setInput] = useState("");

const addNote = () => {
  if(input.trim()==="")return;
  setNotes([...notes,{text:input,completed:false}]);
}

const deleteNote = (index) => {
const updatedNotes = [...notes];
updatedNotes.splice(index,1);
setNotes(updatedNotes); 
}

const CompleteTask = (index) => {
const updatedNotes = [...notes];
updatedNotes[index].completed = !updatedNotes[index].completed;
setNotes(updatedNotes);  
}

const editNote = (index) => {
const newNotes = prompt("edit your note:", notes[index].text);
const updatedNotes = [...notes];
updatedNotes[index].text = newNotes;
setNotes(updatedNotes);
}

  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-100 to-sky-300 p-12'>
      <div className='max-w-xl bg-gray-800 p-12 mx-auto rounded-md'>
<h1 className='text-3xl text-center text-white font-bold'>Todo App</h1>
<div className='flex gap-4 justify-center items-center'>
  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='w-full p-2 mt-5 rounded-md'/>
  <button onClick={addNote}>
    <img src={addIcon} width={70} className='mt-5' />
  </button>
</div>
      </div>

{notes.length > 0 && (
  <div >
    {notes.map((note,index) => (
      <div key={index} className='bg-white max-w-2xl p-5 mx-auto mt-5 flex justify-between text-xl font-bold'>
        <span className={note.completed ? "text-gray-600 line-through" : ""}>{note.text}</span>
        <div className='space-x-3'>
          <button onClick={()=>editNote(index)}>
            <img src={editIcon} width={30} alt="" />
          </button>
          <button onClick={()=>CompleteTask(index)}>
            <img src={completeIcon} width={30} alt="" />
          </button>
          <button onClick={()=>deleteNote(index)}>
            <img src={deleteIcon} width={30} alt="" />
          </button>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  )
}

export default Todo
