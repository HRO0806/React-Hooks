import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className={'footer'}>
      <div className={'link-container'}>
        <p><a className='footer-item' href='https://github.com/HRO0806' target='_blank'>My GitHub</a></p>
        <p><a className="footer-item" href="https://www.linkedin.com/in/henry-olson-4b1169231/" target='_blank'>My LinkedIn</a></p>
        <p><a className="footer-item" href="https://thawing-falls-25223.herokuapp.com/" target='_blank'>portfolio</a></p>
      </div>
    </footer>
  )
}

export default Footer;