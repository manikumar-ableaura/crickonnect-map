import React, { useState } from 'react';
import './Header.css';
import logo from './img/crik.png'



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Header">
            <div className="logo">
                <img
                    className="dome"
                    src={logo}
                    alt="unknown!" />
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="/myteam" onClick={() => setMenuOpen(false)}>My Team </a></li>
                    <li><a href="/booking" onClick={() => setMenuOpen(false)}>Match Booking</a></li>
                    <li><a href="/tournament" onClick={() => setMenuOpen(false)}>Tournaments</a></li>
                    <li><a href="/login" onClick={() => setMenuOpen(false)}>Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
