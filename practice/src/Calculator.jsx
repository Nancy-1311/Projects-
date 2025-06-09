import React, { useState } from 'react'

const Calculator = () => {
  const[input,setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input+value);
  }

  const handleDelete = () => {
    setInput(input.slice(0,-1))
  }

  const handleClear = () => {
    setInput("");
  }

  const handleCalculate = () => {
    try{
      setInput(eval(input).toString());
    }catch(error){
      setInput('Error');
    }
  }

 
  return (
    <div className='bg-gray-200 min-h-screen p-10'>
      <div className='bg-gray-800 max-w-xl p-2 mx-auto rounded-xl'>
        <h1 className='text-3xl text-center font-bold text-white'>Calculator</h1>
        <input type="text" value={input} className='w-full p-3 mt-4 rounded-md shadow-md shadow-gray-700 bg-transparent text-white text-2xl text-right' readOnly />
        <div className='text-white text-2xl grid grid-cols-4 p-10 gap-10 shadow-md mt-2'>
        <button onClick={handleClear} className='shadow-md shadow-gray-700 rounded-xl p-3'>AC</button>
        <button onClick={handleDelete} className='shadow-md shadow-gray-700 rounded-xl p-3'>DE</button>
        <button onClick={()=>handleButtonClick('.')} className='shadow-md shadow-gray-700 rounded-xl p-3'>.</button>
        <button onClick={()=>handleButtonClick('/')} className='shadow-md shadow-gray-700 rounded-xl p-3'>/</button>

        <button onClick={()=>handleButtonClick('7')} className='shadow-md shadow-gray-700 rounded-xl p-3'>7</button>
        <button onClick={()=>handleButtonClick('8')} className='shadow-md shadow-gray-700 rounded-xl p-3'>8</button>
        <button onClick={()=>handleButtonClick('9')} className='shadow-md shadow-gray-700 rounded-xl p-3'>9</button>
        <button onClick={()=>handleButtonClick('*')} className='shadow-md shadow-gray-700 rounded-xl p-3'>*</button>

        <button onClick={()=>handleButtonClick('4')} className='shadow-md shadow-gray-700 rounded-xl p-3'>4</button>
        <button onClick={()=>handleButtonClick('5')} className='shadow-md shadow-gray-700 rounded-xl p-3'>5</button>
        <button onClick={()=>handleButtonClick('6')} className='shadow-md shadow-gray-700 rounded-xl p-3'>6</button>
        <button onClick={()=>handleButtonClick('+')} className='shadow-md shadow-gray-700 rounded-xl p-3'>+</button>

        <button onClick={()=>handleButtonClick('1')} className='shadow-md shadow-gray-700 rounded-xl p-3'>1</button>
        <button onClick={()=>handleButtonClick('2')} className='shadow-md shadow-gray-700 rounded-xl p-3'>2</button>
        <button onClick={()=>handleButtonClick('3')} className='shadow-md shadow-gray-700 rounded-xl p-3'>3</button>
        <button onClick={()=>handleButtonClick('-')} className='shadow-md shadow-gray-700 rounded-xl p-3'>-</button>

        <button onClick={()=>handleButtonClick('0')} className='shadow-md shadow-gray-700 rounded-xl p-3'>0</button>
        <button onClick={()=>handleButtonClick('00')} className='shadow-md shadow-gray-700 rounded-xl p-3'>00</button>
        <button onClick={handleCalculate}  className='shadow-md shadow-gray-700 rounded-xl p-3'>=</button>
        
        </div>
      </div>
    </div>
  )
}

export default Calculator

  