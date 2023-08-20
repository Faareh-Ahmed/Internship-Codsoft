import React from 'react'
import Skills1 from '../Images/skills1.png'
import Skills2 from '../Images/skills2.png'
import Skills3 from '../Images/skills3.png'
import Skills4 from '../Images/skills4.png'
import Skills5 from '../Images/skills5.webp'
import Skills6 from '../Images/skills6.png'
import { useState } from 'react'

import REACT from '../Images/REACT.png'
const slideImages = [
  Skills1, Skills2, Skills3, Skills4, Skills5, Skills6, REACT, Skills2, Skills3, Skills4, Skills5
];

export default function Skills() {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  const slidesPerSet = 3;
  const startIndex = activeDot * slidesPerSet;
  const visibleSlides = slideImages.slice(startIndex, startIndex + slidesPerSet);

  return (
    <>
    <div className='skills-container'>
      <h1 className='skills-heading'>Skills</h1>
      <div className='skill-slider'>
        <div className='skill-slider-track' style={{ transform: `translateX(-${startIndex * 0}px)` }}>
          {visibleSlides.map((slide, index) => (
            <div key={startIndex + index} className='slide'>
              <img src={slide} className='skill-img' alt='logo' />
            </div>
          ))}
        </div>
        <div className='dot-navigation'>
          {Array(Math.ceil(slideImages.length / slidesPerSet))
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`dot ${activeDot === index ? 'active-dot' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
        </div>
      </div>
      </div>
    </>
  );
}
