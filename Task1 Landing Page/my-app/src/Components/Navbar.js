// Navbar.js
import React from 'react';
import {useState} from 'react'
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };
  return (
    
    <>
        <header>
    <div className="profile_name">
      Landing Page
    </div>

    <div className="hamburger" onClick={handleMenuToggle}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>

    <nav className={`nav-bar ${menuActive ? 'active' : ''}`}>
      <ul>
        <li><a href="" className="active">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#skills">Services</a></li>
        <li><a href="#projects">Events</a></li>
        <li><a href="#recommendations">Contacts</a></li>
      </ul>
    </nav>
  </header>
    </>
  );
};

export default Navbar;