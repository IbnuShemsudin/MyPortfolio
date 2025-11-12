import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <div className="connect">Connect with me</div>
    </div>
  )
}

export default Navbar
