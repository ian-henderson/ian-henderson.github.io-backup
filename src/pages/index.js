import React from 'react'
import SlideShow from '../components/SlideShow'
import resume from '../images/resume.pdf'
import homeAndRedux from '../images/homeAndRedux.png'
import listings from '../images/listings.gif'
import loginAndRedux from '../images/loginAndRedux.png'
import redditRequestForPermission from '../images/redditRequestForPermission.png'
import subredditAndRedux from '../images/subredditAndRedux.png'
import './index.css'

const expertises = [
  {
    iconClass: "fas fa-code",
    title: "Front End",
    summary: "In depth knowledge of CSS3, HTML5, Responsive Web Design, JavaScript, React & Redux libraries."
  },
  {
    iconClass: "fas fa-database",
    title: "Back End",
    summary: "Adept with PHP and Python back end frameworks including Laravel and Django. Versed in SQL and relational databases."
  },
  {
    iconClass: "fas fa-cogs",
    title: "Tool Set",
    summary: "Extensive experience with development tools including Heroku, Bash, Docker, Vagrant, Linux, Git, and Vim."
  }
]

const redditScreenshots = [
  {
    path: loginAndRedux,
    title: 'Login Page with Redux Devtools'
  },
  {
    path: redditRequestForPermission,
    title: 'Reddit Request For Permission Page'
  },
  {
    path: listings,
    title: 'Endlessly Loading Data'
  },
  {
    path: homeAndRedux,
    title: 'Home Page with Redux Devtools'
  },
  {
    path: subredditAndRedux,
    title: 'Subreddit Page with Redux Devtools'
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
          <a target='_blank' href={resume}>
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
            These are the areas I have the most experience in.<br />
            Picking up new languages and frameworks isn't a problem.
          </p>
        </div>
        <div>
          {expertises.map((expertise, index) =>
            <div key={index} className='column'>
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
            {/* TODO: Set up slide show here */}
            {/*
            <a target='_blank' href='https://reddit-reactjs.herokuapp.com'>
              <img src={redditScreenshot} />
            </a>
            */}
            <p className='intro'>
              <a target='_blank' href='https://github.com/ian-henderson/reddit'>Reddit Browser</a>
            </p>
            <p className='description-container'>
              A progressive web app for Reddit. It consumes Reddit's API to
              minimally present subreddit data with endlessly scrolling feeds.
            </p>
            <SlideShow data={redditScreenshots} />
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
              <i className='fab fa-github-title social-logo'></i>
            </a>
            {/* LinkedIn */}
            <a target='_blank' href='https://www.linkedin.com/in/iancurtish/'>
              <i className='fab fa-linkedin social-logo'></i>
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
