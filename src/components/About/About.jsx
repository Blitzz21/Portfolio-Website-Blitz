import React from 'react';
import './about.css';

import reactLogo from '../About/icons/react.svg'
import htmlLogo from '../About/icons/html.svg'
import cssLogo from '../About/icons/css.svg'
import jsLogo from '../About/icons/js.svg'
import javaLogo from '../About/icons/java.svg'
import pythonLogo from '../About/icons/python.svg'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true })
  }, []);

  return (
    <div className='About'>
      <h1 className='About__title' data-aos="fade-right">About</h1>

        <section className='About__about-me-section'>
          <p data-aos="fade-right">I'm a 1st Year Computer Science Student at St. Mary's College of Tagum Inc. (SMCTI), Proffecient in HTML and CSS and starting to get acquainted to React, also with hands-on experience in SMCTI's Laboratory assignments, and plate projects. Able to produce expected outcome and determined to strive from the field of Web Development, eager to learn and gain work and freelance experience. Humble, polite, neat, oral communication, flexible and with good time management.
          </p>
          <div data-aos="fade-left" className='About__tech-stack'>
            <h1 >My Technology Stack</h1>
            <div className='About__tech-stack_icons'>
              <img data-aos="fade" src={reactLogo} alt="React Logo" />
              <img data-aos="fade" src={htmlLogo} alt="html Logo" />
              <img data-aos="fade" src={cssLogo} alt="css Logo" />
              <img data-aos="fade" src={jsLogo} alt="js Logo" />
              <img data-aos="fade" src={javaLogo} alt="java Logo" />
              <img data-aos="fade" src={pythonLogo} alt="python Logo" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default About;