import React from 'react'
import tyre from '../Images/tyre.png'
import steering from '../Images/steering.png'
import headlight from '../Images/headlight.png'
export default function Services() {
  return (
    <>
        <div className='containerStyle'>
      <div className='squareStyle'>
        <div className='circleStyle'>
          <img src={tyre} alt='Tyres'/>
        </div>
      </div>
      <div className='squareStyle'>
        <div className='circleStyle'>
          <img src={steering} alt='steering'/>
        </div>
      </div>
      <div className='squareStyle'>
        <div className='circleStyle'>
          <img src={headlight} alt='Headlights'/>
        </div>
      </div>
    </div>
    </>
  )
}
