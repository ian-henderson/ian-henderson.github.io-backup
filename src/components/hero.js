import React from 'react'
import './hero.css'

const Hero = props =>
  <div id='fullscreen-hero' className='home-hero'>
    <div className='hero-container'>
      <div className='hero-content'>
        <div id='logo-container'>
          <i id='logo' className="fas fa-code"></i>
        </div>
        <h1>
          Hi, I'm  Ian. I build software for the web.
        </h1>
        <div className='buttons'>
          <a href='#'><button>Yes, I'm available for hire</button></a>
        </div>
        <div className='learn-more'>
          <a href='#'>
            Learn more about what I do
            <br/>
            <i id='learn-more-chevron' className='fas fa-chevron-down'></i>
          </a>
        </div>
      </div>
    </div>
  </div>

export default Hero