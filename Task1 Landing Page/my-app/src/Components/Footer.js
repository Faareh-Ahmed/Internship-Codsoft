import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-column">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Details</h4>
                    <p>Phone: +92-345-67899</p>
                    <p>Email: landingpage@gmail.com</p>
                    <p>Address: 1234 St, City, Country</p>
                </div>
                <div className="footer-column">
                    <p>&copy; Landing Page. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}
