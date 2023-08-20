import React from 'react';

import Project2 from '../Images/projects2.jpg';
import Project3 from '../Images/projects3.png';
import Project6 from '../Images/projects6.jpeg';

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <h1 className='projects-heading'>Projects</h1>
        <div className="car-gallery">
          <div className="car-box" id='box1'>
            <div className="car-card">
              <img src={Project3} alt="Car 1" className='car1' />
              <div className="card-details">
                <h3>HealthCare Management System</h3>
                <p>Get ready for the ultimate thrill as fierce competitors from around the world battle it out...</p>
                <div className='projects-button'>
                  <button>GitHub Repository</button>
                </div>
              </div>
            </div>
          </div>

          <div className="car-box" id='box2'>
            <div className="car-card">
              <img src={Project6} alt="Car 2" className='car2' />
              <div className="card-details">
                <h3>The Flags</h3>
                <p>Discover the top-selling cars that redefine the driving experience with cutting-edge technology...</p>
                <div className='projects-button'>
                  <button>GitHub Repository</button>
                </div>
              </div>
            </div>
          </div>

          <div className="car-box" id='box3'>
            <div className="car-card">
              <img src={Project2} alt="Car 3" className='car3' />
              <div className="card-details">
                <h3>Little-Lemon Restaurant</h3>
                <p>Step back in time and relish the nostalgia of classic old cars, a captivating collection of vintage automobiles...</p>
                <div className='projects-button'>
                  <button>GitHub Repository</button>
                </div>
              </div>
            </div>
          </div>



          {/* Add more car boxes as needed */}
        </div>
      </div>
    </>
  );
}
