import React from 'react'
import car1 from '../Images/car1.jpg'
import car2 from '../Images/car2.jpg'
import car3 from '../Images/car3.jpeg'
import car5 from '../Images/car5.jpg'


export default function Description() {
    return (
        <>
            <div className="car-gallery">
      <div className="car-box">
        <img src={car1} alt="Car 1" />
        <div className="car-description">
          <h3>Drag Race</h3>
          <p>Get ready for the ultimate thrill as fierce competitors from around the world battle it out in an adrenaline-pumping drag race showdown. Witness jaw-dropping speeds, precision driving, and high-octane drama as they vie for the title of drag racing champion. Buckle up for a heart-pounding experience like no other!"</p>
        </div>
      </div>
      <div className="car-box">
        <img src={car2} alt="Car 2" />
        <div className="car-description">
          <h3>Best Selling</h3>
          <p>Discover the top-selling cars that redefine the driving experience with cutting-edge technology, unparalleled comfort, and unmatched performance. From sleek sedans to powerful SUVs, these best-sellers offer a perfect blend of style and substance, winning hearts on roads worldwide.</p>
        </div>
      </div>
      <div className="car-box">
        <img src={car5} alt="Car 3" />
        <div className="car-description">
          <h3>Classics</h3>
          <p>Step back in time and relish the nostalgia of classic old cars, a captivating collection of vintage automobiles that exude timeless elegance and craftsmanship. These automotive treasures showcase the artistry of bygone eras, taking you on a journey through the golden age of motoring.</p>
        </div>
      </div>
      {/* Add more car boxes as needed */}
    </div>
        </>
    )
}
