import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/About/AboutMe'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App
