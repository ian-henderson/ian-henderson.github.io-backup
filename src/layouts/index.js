import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Ian Henderson | Software Engineer</title>
      {/*<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"/>*/}
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"
        integrity="sha384-4oV5EgaV02iISL2ban6c/RmotsABqE4yZxZLcYMAdG7FAPsyHYAPpywE9PJo+Khy"
        crossorigin="anonymous"
      />
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112309795-1"></script>
    {/* Google Analytics */}
    <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-112309795-1');
    `}</script>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
