import React, { useState } from 'react'
import correct from '../src/images/correct.png'

const Popup = () => {
const [showPopup, setShowPopup] = useState(false);
const handleSubmit = () =>{
  setShowPopup(true);
}
const closePopup = () => setShowPopup(false);


  return (
    <div className='main-container flex justify-center items-center h-screen bg-black'>
      {!showPopup && (<button onClick={handleSubmit} className='bg-white text-black p-2 w-40 hover:bg-gray-300 text-2xl rounded-xl font-bold shadow-2xl'>Submit</button>
      )}

    {showPopup && (
      <div className='bg-white flex justify-center items-center p-4 rounded-md relative ' onClick={closePopup}>
        <div onClick={(e) => e.stopPropagation()}>
          <div className='bg-white mb-4 flex flex-col items-center'>
             <div className="image-container absolute -top-6"><img src={correct} width={60} className='mb-2' /></div> 
              <div className="text-container"><h2 className='text-4xl font-bold text-center mb-5 mt-8'>Thank You!</h2></div> 
             <div className="success-message"><p className='text-md font-bold text-center mb-3'>Your details have been <br></br>successfully submitted. Thanks!</p></div> 
              <button onClick={closePopup} className='bg-[#21b548] rounded-md p-2 w-full shadow-md  mt-3 text-white font-bold text-2xl'>OK</button>
          </div>

        </div>

      </div>
    )}

    </div>
  );
}

export default Popup
  