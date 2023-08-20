import React from 'react'

import Faareh from '../Images/Faareh-Pic.jpg';
import Gif1 from '../Images/gif1.mp4'

export default function About() { 
    return (
        <>
            <div className='about-container'>
                
                <h1 className='about-heading'>About</h1>
                <div className='about-real-container'>
                <div className='about-info'>
                    <p>Hi! I am Faareh Ahmed, a first year student of Software Engineering at SEECS-NUST. My curiosity of learning new technologies and solving problems pushes me forward to become better in the community.
                        I am enhancing my Front-End Development skills day by day using React.
                        I am also a certified Graphic Designer from Digiskills.pk</p>
                    <div className='about-button'>
                        <button>Download Cv</button>
                    </div>
                </div>
                <div className='about-img'>
                    <img src={Faareh} className='about-img-fluid' alt='faarehs image' />
                </div>
                </div>
                
            </div>
        </>
    )
}
