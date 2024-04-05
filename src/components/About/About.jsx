import React from 'react';
import './about.css';

import reactLogo from '../About/icons/react.svg'
import htmlLogo from '../About/icons/html.svg'
import cssLogo from '../About/icons/css.svg'
import jsLogo from '../About/icons/js.svg'
import javaLogo from '../About/icons/java.svg'
import pythonLogo from '../About/icons/python.svg'
import jqueryLogo from '../About/icons/jquery.svg'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true })
  }, []);

  return (
    <div id='About' className='About'>
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
              <img data-aos="fade" src={jqueryLogo} alt="jquery Logo" />
            </div>
          </div>
        </section>

        <section className='About__about-me-skills'>
          <div> 
            <h1 className='About__about-me-skills-title' data-aos="fade">Technical Skills: </h1>
          </div>
          
          <div className='About__Techskills'>
            
            <div data-aos="fade" className='Techskill__htmlcss' style={{padding: 10}}>
              <p>HTML/CSS</p>
              <p>90%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress'></div>
                  </div>
                </div>
            </div>

            <div data-aos="fade" className='Techskill__javascript' style={{padding: 10}}>
              <p>Javascript</p>
              <p>30%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress' style={{width: 30}}></div>
                  </div>
                </div>
            </div>

            <div data-aos="fade" className='Techskill__react' style={{padding: 10}}>
              <p>React</p>
              <p>30%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress' style={{width: 30}}></div>
                  </div>
                </div>
            </div>

            <div data-aos="fade" className='Techskill__python' style={{padding: 10}}>
              <p>Python</p>
              <p>40%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress' style={{width: 40}}></div>
                  </div>
                </div>
            </div>

            <div data-aos="fade" className='Techskill__java' style={{padding: 10}}>
              <p>Java</p>
              <p>50%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress'  style={{width: 50}}></div>
                  </div>
                </div>
            </div>

            <div data-aos="fade" className='Techskill__jquery' style={{padding: 10}}>
              <p>jQuery</p>
              <p>30%</p>
                <div className='container-progress'>
                  <div className='progressbar'>
                    <div className='progress'  style={{width: 30}}></div>
                  </div>
                </div>
            </div>

          </div>
        </section>
    </div>
  )
}

export default About;