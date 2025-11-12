import React, { useState } from 'react'; // 1. Import useState
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    // 2. State to track if the mobile menu is open
    const [menuOpen, setMenuOpen] = useState(false);

    // 3. Function to toggle the state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            
            {/* 4. Conditional Class: 'open' class is added when menuOpen is true */}
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
            
            <div className="connect">Connect with me</div>
            
            {/* 5. Hamburger Icon: Clicks call toggleMenu, and the icon changes based on state */}
            <div className="menu-icon" onClick={toggleMenu}>
                {/* A simple text icon. For a better look, use an SVG or Font Awesome icon! */}
                {menuOpen ? '✕' : '☰'} 
            </div>
        </div>
    );
};

export default Navbar;