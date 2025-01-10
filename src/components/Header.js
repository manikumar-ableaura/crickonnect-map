import React from 'react';
import './Header.css';
import logo from './img/crik.png'



const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <img
                    className="dome"
                    src={logo}
                    alt="unknown!" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/myteam">My Team </a></li>
                    <li><a href="/booking">Match Booking</a></li>
                    <li><a href="/tournament">Tournaments</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    );      
};

export default Header;
