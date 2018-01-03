import React from 'react'
import redditScreenshot from '../images/redditScreenshot.png'
import resume from '../images/resume.pdf'
import './index.css'

const expertises = [
  {
    iconClass: "fas fa-code",
    title: "Front End",
    summary: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."
  },
  {
    iconClass: "fas fa-database",
    title: "Back End",
    summary: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."
  },
  {
    iconClass: "fas fa-pencil-alt",
    title: "???",
    summary: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."
  }
]

const IndexPage = () =>
  <div>
    {/* Hero */}
    <div id='hero'>
      <div className='hero-container'>
        <div className='hero-content'>
          <div id='logo-container'>
            <i id='hero-logo' className='fab fa-grav'></i>
          </div>
          <h1 id='hero-header'>
            Ian Henderson
          </h1>
          <p id='hero-subheader' className='statement'>
            Software Engineer
          </p>
          <a href='#sub-footer'>
            <button id='hero-button'>
              Yes, I'm available for hire
            </button>
          </a>
          <div className='learn-more-container'>
            <a id='learn-more-link' href='#me'>
              Learn more about what I do
              <br />
              <i id='learn-more-chevron' className='fas fa-chevron-down'></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Expertise */}
    <section id='me'>
      <div className='container'>
        <div id='me-header-container'>
          <p className='intro'>
            My Expertise
          </p>
          <p className='statement'>
            Full Stack Development
          </p>
        </div>
        <div>
          {expertises.map((expertise, index) => 
            <div className='column'>
              <div className='expertise-block'>
                <i className={`${expertise.iconClass} expertise-logo`}></i>
                <h4 className='expertise-title'>{expertise.title}</h4>
                <p className='expertise-summary'>{expertise.summary}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Personal Projects */}
    <section id='personal-projects'>
      <div className='container'>
        <div>
          <p className='intro'>
            Personal Projects
          </p>
          <p className='statement'>
            When I'm not freelancing, I'm working on digital products.
          </p>
        </div>
        <div>
          <div className='expertise-block'>
            <a target='_blank' href='https://reddit-reactjs.herokuapp.com'>
              <img src={redditScreenshot} />
            </a>
            <p className='description-container'>
              <a target='_blank' href='https://github.com/ian-henderson/reddit'>Reddit Browser</a> is platform that helps independent distributors of Young Living essential oils grow their business through automated class promotion and prospect follow-up management.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Sub Footer */}
    <section id='sub-footer'>
      <div className='container'>
        <div>
          <p className='intro'>
            Want to work together?
          </p>
          <p className='statement'>
            I'm currently on the job hunt; feel free to reach out.
          </p>
          <a href='mailto:iancurtish@gmail.com?subject=Work'>
            <button>
              get started
            </button>
          </a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className='container'>
        <div>
          <div className='footer-logo-container'>
            <i className='fab fa-grav footer-logo'></i>
          </div>
          <p className='made-by-me'>
            Handmade by me © 2018.
          </p>
          <div className='social-logos-container'>
            {/* GitHub */}
            <a target='_blank' href='https://github.com/ian-henderson'>
              <i className='fab fa-github-alt social-logo'></i>
            </a>
            {/* LinkedIn */}
            <a target='_blank' href='https://www.linkedin.com/in/iancurtish/'>
              <i className='fab fa-linkedin social-logo'></i>
            </a>
            {/* Resume */}
            <a target='_blank' href={resume}>
              <i className='fas fa-file-alt'></i>
            </a>
            {/* Twitter */}
            <a target='_blank' href='https://twitter.com/iancurtish'>
              <i className='fab fa-twitter social-logo'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>

export default IndexPage
