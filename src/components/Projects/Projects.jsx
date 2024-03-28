import React from 'react';
import './projects.css';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Portfolio from '../Projects/img/portfolio.png'

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true })
  }, [])
  return (
    
    <div id='Projects' className='Projects'>
      <h1 data-aos="fade-right">Projects</h1>

      <div className='Projects__card-container'>

        <div data-aos="zoom-in" className="Projects-card">
          <img src={Portfolio} alt="Portfolio" />
          <div className="Projects-card-content">
            <h3>Portfolio Webite (Ongoing)</h3>
            <p>Developed using primarily ReactJS. Applied responsive web design techniques and UI/UX principles. A basic but functioning Porfolio Website.</p>
            <div className="Projects-card-techstack">
              <p>React</p><p>HTML</p><p>CSS</p><p>Javascript</p>
            </div>
            <div className='Projects-card-link'>
              <a href="https://github.com/Blitzz21/Portfolio-Website-Blitz" target='_blank'>View Code</a><a href="https://portfolio-website-blitz.vercel.app/" target='_blank'>Live View</a>
            </div>
          </div>  
        </div>

      </div>

    </div>
  )
}

export default Projects;