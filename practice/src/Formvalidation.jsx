import React, { useState } from 'react';
import correct from '../src/images/correct.png'; // Keep your existing image

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className='main-container flex justify-center items-center h-screen bg-black'>
      {!showPopup && (
        <form
          onSubmit={handleSubmit}
          className='bg-white p-6 rounded-lg shadow-lg flex flex-col w-80'
        >
          <h2 className='text-2xl font-bold mb-4 text-center'>Submit Form</h2>

          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className='p-2 mb-2 border border-gray-300 rounded'
          />
          {errors.name && (
            <p className='text-red-500 text-sm mb-2'>{errors.name}</p>
          )}

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='p-2 mb-2 border border-gray-300 rounded'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mb-2'>{errors.email}</p>
          )}

          <button
            type='submit'
            className='bg-black text-white p-2 rounded hover:bg-gray-800 font-semibold'
          >
            Submit
          </button>
        </form>
      )}

      {showPopup && (
        <div
          className='bg-white flex justify-center items-center p-4 rounded-md relative'
          onClick={closePopup}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div className='bg-white mb-4 flex flex-col items-center'>
              <div className='image-container absolute -top-6'>
                <img src={correct} width={60} className='mb-2' />
              </div>
              <div className='text-container'>
                <h2 className='text-4xl font-bold text-center mb-5 mt-8'>
                  Thank You!
                </h2>
              </div>
              <div className='success-message'>
                <p className='text-md font-bold text-center mb-3'>
                  Your details have been <br /> successfully submitted. Thanks!
                </p>
              </div>
              <button
                onClick={closePopup}
                className='bg-[#21b548] rounded-md p-2 w-12 shadow-md w-full mt-3 shadow-xl text-white font-bold text-2xl'
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

export default PopupForm;
