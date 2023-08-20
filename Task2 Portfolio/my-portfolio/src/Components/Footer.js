import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-column">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Details</h4>
                    <p>Phone: +92-345-67899</p>
                    <p>Email: portfolio@gmail.com</p>
                    <p>Address: 1234 St, City, Country</p>
                </div>
                <div className="footer-column">
                    <p>&copy; Faareh Ahmed. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}
