import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      <a
        href="https://twitter.com/acatmore"
        target="_blank"
        className="icon fa-twitter"
      />
      <a
        href="https://github.com/acatmore"
        target="_blank"
        className="icon fa-github"
      />
      <a
        href="https://www.linkedin.com/in/alex-atmore-8b38b053"
        target="_blank"
        className="icon fa-linkedin"
      />
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
