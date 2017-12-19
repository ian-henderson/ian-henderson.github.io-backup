import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Ian Henderson | Web Developer</title>
      <script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"/>
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
