import React, { useState } from 'react';
import correct from '../src/images/correct.png';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="main-container flex justify-center items-center min-h-screen bg-black p-4">
      {!showPopup && (
        <button
          onClick={handleSubmit}
          className="bg-white text-black p-3 w-40 hover:bg-gray-300 text-xl rounded-xl font-bold shadow-2xl transition"
        >
          Submit
        </button>
      )}

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-6 w-full max-w-sm mx-4 shadow-xl relative"
          >
            {/* Image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <img src={correct} width={60} alt="Success" />
            </div>

            {/* Text & Button */}
            <div className="mt-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-sm sm:text-base font-medium mb-4">
                Your details have been <br /> successfully submitted. Thanks!
              </p>
              <button
                onClick={closePopup}
                className="bg-[#21b548] w-full py-2 rounded-md text-white text-lg font-bold hover:bg-green-600 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
