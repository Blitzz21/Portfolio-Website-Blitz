import React from 'react';
import './greetings.css';

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Greetings = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true })
  }, []);

  return (
  <div id='Home' className='Greetings'>
    <div data-aos="fade" className='p-container'>
      <p className='Greetings__first-p'>Hi, I'm John Floyd Marticio😄</p>
      <p className='Greetings__second-p'>I'm a, <span>Freelance Web Developer</span>.</p>

        <div className='buttons-container'>
          <div className='Greetings__contact-button'>
            <button data-aos="zoom-in" type="button">Contact Me</button>
          </div>
          <div data-aos="zoom-in" className='Greetings__download-cv'>
            <a href='CV.docx' download>Download CV</a>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Greetings;