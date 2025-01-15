import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo from './img/crik.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Header">
            {/* Use Link for the logo to navigate to the home page */}
            <div className="logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img
                        className="dome"
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    {/* Use Link for navigation */}
                    <li><Link to="/myteam" onClick={() => setMenuOpen(false)}>My Team</Link></li>
                    <li><Link to="/booking" onClick={() => setMenuOpen(false)}>Match Booking</Link></li>
                    <li><Link to="/tournament" onClick={() => setMenuOpen(false)}>Tournaments</Link></li>
                    <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
