import React, { useState } from 'react'
import img1 from '../src/images/bg.jpeg';
import img2 from '../src/images/bg1.jpeg';
import img3 from '../src/images/bg2.jpeg';
import img4 from '../src/images/bg3.jpeg';
import arrow from '../src/images/arrow.png';
import arrow1 from '../src/images/next.png';
import cancel from '../src/images/cancel.png'

const images =[img1,img2,img3,img4];

const ImageGallery = () => {
const[current,setCurrent] = useState(0);
const[isLightboxOpen,setIsLightboxOpen] = useState(false);
const length = images.length;

const nextSlide = () => {
  setCurrent((prev) => (prev === length -1 ? 0 : prev + 1));
};

const prevSlide = () => {
  setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
};

  return (
    <>
    <div className='relative w-full max-w-xl mx-auto mt-10  overflow-hidden rounded-2xl shadow-lg'>
      <div className='flex transition-all duration-700 ease-in-out' style={{transform:`translateX(-${current * 100}%)`}}>
      {images.map((src,index) => (
        <img
        key={index}
        src={src}
        alt={`Slide ${index + 1}`}
        className='w-full flex-shrink-0 cursor-pointer'
        onClick={()=>setIsLightboxOpen(true)}
        />
      ))}
      </div>

      <button onClick={prevSlide}>
         <img src={arrow} width={40} className='rotate-180 absolute top-1/2 left-2 bg-white rounded-full border border-white -translate-y-1/2' />
        </button>

        <button onClick={nextSlide}>
         <img src={arrow1} width={40} className='absolute top-1/2 right-2 bg-white rounded-full border border-white -translate-y-1/2' />
        </button>
    </div>
{isLightboxOpen && (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500'>
    <div className='relative'>
    <img src={images[current]} alt="full view" />
    <button onClick={()=>setIsLightboxOpen(false)} className='absolute top-2 right-2 bg-white text-black rounded-full border border-white font-bold text-xl hover:bg-gray-300 transition-all'>
      <img src={cancel} width={50}/>
    </button>
     </div>
    </div>
    )}
    </>
  )
}

export default ImageGallery
