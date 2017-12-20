import React from 'react'
import redditScreenshot from '../images/redditScreenshot.png'
import './index.css'

const IndexPage = () =>
  <div>
    {/* Hero */}
    <div id='fullscreen-hero' className='home-hero'>
      <div className='hero-container'>
        <div className='hero-content'>
          <div id='logo-container'>
            <i id='logo' className="fas fa-code"></i>
          </div>
          <h1>Hi, I'm  Ian. I build software for the web.</h1>
          <a href='#'><button>Yes, I'm available for hire</button></a>
          <div className='learn-more'>
            <a href='#'>
              Learn more about what I do<br />
              <i id='learn-more-chevron' className='fas fa-chevron-down'></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Me */}
    <section id='me'>
      <div className='container'>
        <div id='me-header' className='row'>
          <p className='intro'>My Expertise</p>
          <p className='statement'>I've got chops in all phases of the design process.</p>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='expertise-block'>
              <i className="fas fa-terminal logo"></i>
              <h4 className='title'>Title 1</h4>
              <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='expertise-block'>
            <i className="fab fa-codepen logo"></i>
            <h4 className='title'>Title 2</h4>
            <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
          </div>
        </div>
        <div className='column'>
          <div className='expertise-block'>
            <i className="fab fa-node-js logo"></i>
            <h4 className='title'>Title 3</h4>
            <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Personal Projects */}
    <section id='personal-projects'>
      <div className='container'>
        <div className='row'>
          <p className='intro'>Personal Projects</p>
          <p className='statement'>When I'm not freelancing, I'm working on digital products.</p>
        </div>
        <div className='row'>
          <div className='expertise-block'>
            <a target='_blank' href='https://reddit-reactjs.herokuapp.com'>
              <img className='screenshot' src={redditScreenshot} />
            </a>
            <p className='description'>
              <a target='_blank' href='https://github.com/ian-henderson/reddit'>Reddit Browser</a> is platform that helps independent distributors of Young Living essential oils grow their business through automated class promotion and prospect follow-up management.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Sub Footer */}
    <section id='sub-footer'>
      <div className='container'>
        <div className='row'>
          <p className='intro'>Want to work together?</p>
          <p className='statement'>I'm currently accepting...</p>
          <a href='mailto:iancurtish@gmail.com?subject=Work'><button>get started</button></a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
     <div className='container'>
      <div className='row'>
        <div id='footer-logo-container'>
          <i id='footer-logo' className="fas fa-code"></i>
        </div>
        <p className='made-by-me'>Handmade by me © 2017.</p>
        <div className='social-links'>
          {/* GitHub */}
          <a target='_blank' href='https://github.com/ian-henderson'>
            <i id='social-logo' className="fab fa-github-alt"></i>
          </a>
          {/* LinkedIn */}
          <a target='_blank' href='https://www.linkedin.com/in/iancurtish/'>
            <i id='social-logo' className="fab fa-linkedin"></i>
          </a>
          {/* Twitter */}
          <a target='_blank' href='https://twitter.com/iancurtish'>
            <i id='social-logo' className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
     </div> 
    </footer>
  </div>

export default IndexPage
