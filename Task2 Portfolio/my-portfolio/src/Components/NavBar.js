// Navbar.js
import React from 'react';
import {useState} from 'react'
const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };
  return (
    
    <>
        <header>
    <div className="profile_name">
      Faareh Ahmed
    </div>

    <div className="hamburger" onClick={handleMenuToggle}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>

    <nav className={`nav-bar ${menuActive ? 'active' : ''}`}>
      <ul>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/connect">Connect</a></li>
      </ul>
    </nav>
  </header>
    </>
  );
};

export default NavBar;