import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='Footer__parent'>
    <h1>Let's Connect</h1>
    <div id='Contacts' className='Footer'>
      
      <div className='Footer__first-section'>
        <h2>JF Marticio</h2>
        <div className='first-section-email'>
          <i className="fa-regular fa-envelope"></i>
            <p>johnfloydmarticio@proton.me</p>
        </div>

        <div className='first-section-phone'>
          <i className="fa-solid fa-phone"></i>
          <p>+63 991 299 2490</p>
        </div>
      </div>

      <div className='Footer__contacts-section'>
        <h2>Contact me Via</h2>
        <div className='contacts-section-links'>
          <a href='https://www.facebook.com/DanamesBlitz.21' target='_blank'><i className="fa-brands fa-facebook fa-xl"></i></a>
          <a href='#' target='_blank'><i className="fa-brands fa-instagram fa-xl"></i></a>
          <a href='#' target='_blank'><i className="fa-brands fa-x-twitter fa-xl"></i></a>
          <a href='https://www.linkedin.com/in/john-floyd-marticio-6223932b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><i className="fa-brands fa-linkedin fa-xl"></i></a>
        </div>
      </div>

      <div className='Footer__source-codes'>
        <h2>My Codes</h2>
        <a href='https://github.com/Blitzz21?tab=repositories' target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a>
      </div>

    </div>
    <div className='copyright'>
      <p>Copyright © 2024 John Floyd Marticio. All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer;
