import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import './index.css'

const gTagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-112309795-1');
`;

const gAnalyticsScript = `
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-112309795-1', 'auto');
  ga('send', 'pageview');
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Ian Henderson | Software Engineer</title>

      <script
        defer
        src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"
      />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script>{gTagScript}</script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112309795-1" />

      {/* Google Analytics */}
      <script>{gAnalyticsScript}</script>
      <script async src="https://www.google-analytics.com/analytics.js" />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
