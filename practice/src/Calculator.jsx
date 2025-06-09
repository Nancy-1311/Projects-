import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className='bg-gray-200 min-h-screen px-4 py-6 sm:p-10'>
      <div className='bg-gray-800 w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 mx-auto rounded-xl'>
        <h1 className='text-2xl sm:text-3xl text-center font-bold text-white'>Calculator</h1>
        <input
          type="text"
          value={input}
          className='w-full p-3 sm:p-4 mt-4 rounded-md shadow-md shadow-gray-700 bg-transparent text-white text-xl sm:text-2xl text-right'
          readOnly
        />
        <div className='text-white grid grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 mt-4 shadow-md'>

          <button onClick={handleClear} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>AC</button>
          <button onClick={handleDelete} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>DE</button>
          <button onClick={() => handleButtonClick('.')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>.</button>
          <button onClick={() => handleButtonClick('/')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>/</button>

          <button onClick={() => handleButtonClick('7')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>7</button>
          <button onClick={() => handleButtonClick('8')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>8</button>
          <button onClick={() => handleButtonClick('9')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>9</button>
          <button onClick={() => handleButtonClick('*')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>*</button>

          <button onClick={() => handleButtonClick('4')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>4</button>
          <button onClick={() => handleButtonClick('5')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>5</button>
          <button onClick={() => handleButtonClick('6')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>6</button>
          <button onClick={() => handleButtonClick('+')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>+</button>

          <button onClick={() => handleButtonClick('1')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>1</button>
          <button onClick={() => handleButtonClick('2')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>2</button>
          <button onClick={() => handleButtonClick('3')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>3</button>
          <button onClick={() => handleButtonClick('-')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>-</button>

          <button onClick={() => handleButtonClick('0')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>0</button>
          <button onClick={() => handleButtonClick('00')} className='min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg'>00</button>
          <button onClick={handleCalculate} className='col-span-2 min-w-0 p-3 sm:p-4 shadow-md shadow-gray-700 rounded-xl text-base sm:text-lg bg-blue-600 hover:bg-blue-700 transition duration-200'>=</button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
