import React from 'react'
import image from '../../assets/image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img src={image} alt="Hero" className='profile'/>
        <div className="hero-text">
            <h1><span>I'm Abdurezak,</span> Mern stack developer</h1>
            <p>
                I specialize in creating dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js). With a passion for coding and problem-solving, I strive to build efficient and user-friendly digital experiences.
            </p>
            <div className="hero-buttons">
                <button className='btn hire-me'>Hire Me</button>
                <button className='btn download-cv'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
