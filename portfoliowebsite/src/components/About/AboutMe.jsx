import React from 'react'
import Image from '../../assets/image.png'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div>
      <div className="about-me">
        <div className="about-title">
           <h1>About Me</h1>
           {/* <img src={Image} alt="About Me" /> */}
        </div>
        
        <div className="about-me-description">
          <div className="about-left">
            <img src={Image} alt="About Me" />
          </div>
          <div className="About-right">
           <div className="about-me-info">
            <p>Hello! I'm Abdurezak, a passionate MERN stack developer with a knack for building dynamic  and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I create efficient and user-friendly digital experiences. I thrive on solving complex problems through code and am dedicated to delivering high-quality solutions that meet client needs. Let's connect and bring your ideas to life!
            </p>
           </div>
           <div className='about-skills'>
             <h1>Skills </h1>                 
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
             <div className='about-skill'><p>HTML & CSS</p><hr /></div>
          </div>


          </div>
        </div>
        <div className='about-achievments'>
          <div className="achievment">   
            <h1>5+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="achievment">   
            <h1>50+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="achievment">   
            <h1>10+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
