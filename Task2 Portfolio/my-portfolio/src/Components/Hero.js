import React from 'react'

import Hero4 from '../Images/hero4.jpg'




export default function Hero() {
  return (
    <>
    <div className='hero-container'>
      <img src={Hero4} className="img-fluid" alt="Background"/>
      <div className='text-container'>
        <h1>Hi, my name is Faareh Ahmed</h1>
        <p>and I am a Front End Developer</p>
      </div>
    </div>
    </>
  );
}
