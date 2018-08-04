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
    iconClass: 'fab fa-js-square',
    title: 'Client-side',
    summary:
      'In depth knowledge of ES6 JavaScript, React+Redux Ecosystem, React Native, Redux, CSS3, HTML5, and Responsive Web Design.',
  },
  {
    iconClass: 'fas fa-database',
    title: 'Server-side',
    summary:
      'Adept with back end frameworks and technologies including Node.js, GraphQL, and MongoDB.',
  },
  {
    iconClass: 'fas fa-toolbox',
    title: 'Tool Set',
    summary:
      'Extensive experience with development tools including VSCode, ESLint, Flow Type System, Linux, and Vim.',
  },
]

const redditScreenshots = [
  {
    path: listings,
    title: 'Endlessly Loading Data',
  },
  {
    path: loginAndRedux,
    title: 'Login Page with Redux Devtools',
  },
  {
    path: redditRequestForPermission,
    title: 'Reddit Request For Permission Page',
  },
  {
    path: homeAndRedux,
    title: 'Home Page with Redux Devtools',
  },
  {
    path: subredditAndRedux,
    title: 'Subreddit Page with Redux Devtools',
  },
]

const IndexPage = () => (
  <div>
    {/* Hero */}
    <div id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div id="logo-container">
            <i id="hero-logo" className="fab fa-grav" />
          </div>
          <h1 id="hero-header">Ian Henderson</h1>
          <p id="hero-subheader" className="statement">
            Software Engineer
          </p>
          <a href={resume} target="_blank">
            <button id="hero-button">Résumé</button>
          </a>
          <div className="learn-more-container">
            <a id="learn-more-link" href="#me">
              Learn more about what I do
              <br />
              <i id="learn-more-chevron" className="fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Expertise */}
    <section id="me">
      <div className="container">
        <div id="me-header-container">
          <p className="intro">Skills</p>
          <p className="statement">
            Adept at adapting to new systems knowledge, technologies, and
            languages.
          </p>
        </div>
        <div>
          {expertises.map((expertise, index) => (
            <div key={index} className="column">
              <div className="expertise-block">
                <i className={`${expertise.iconClass} expertise-logo`} />
                <h4 className="expertise-title">{expertise.title}</h4>
                <p className="expertise-summary">{expertise.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Personal Projects */}
    <section id="personal-projects">
      <div className="container">
        <p className="intro">Projects</p>
        <p className="statement" />
        <div className="projects-row">
          <div className="column-left">
            <div className="column-content">
              <h4 className="expertise-title project-title">Reddit Browser</h4>
              <p className="expertise-summary project-summary">
                A progressive web app for Reddit. Consumes Reddit's API to
                minimally present subreddit data with endlessly scrolling feeds.
              </p>
            </div>
            <div className="project-buttons">
              <a href="https://reddit-reactjs.herokuapp.com" target="_blank">
                <button className="project-button">Visit Site</button>
              </a>
              <a href="https://github.com/ian-henderson/reddit" target="_blank">
                <button className="project-button">View Source</button>
              </a>
            </div>
          </div>
          <div className="column-right">
            <SlideShow data={redditScreenshots} />
          </div>
        </div>
      </div>
    </section>

    {/* Sub Footer */}
    <section id="sub-footer">
      <div className="container">
        <div>
          <p className="intro">Contact</p>
          <p className="statement">iancurtish@gmail.com</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className="container">
        <div>
          <div className="footer-logo-container">
            <i className="fab fa-grav footer-logo" />
          </div>
          <p className="made-by-me">Copyright © 2018 by Ian Henderson</p>
          <div className="social-logos-container">
            {/* GitHub */}
            <a target="_blank" href="https://github.com/ian-henderson">
              <i className="fab fa-github-alt social-logo" />
            </a>
            {/* LinkedIn */}
            <a target="_blank" href="https://www.linkedin.com/in/iancurtish/">
              <i className="fab fa-linkedin social-logo" />
            </a>
            {/* Twitter */}
            <a target="_blank" href="https://twitter.com/_ian_henderson">
              <i className="fab fa-twitter social-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage
