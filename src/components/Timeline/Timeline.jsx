import React from 'react'
import '../Timeline/timeline.css'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, []);

  return (
<div className='Timeline__body'>
  <h1>My Timeline</h1>
  <div class="Timeline__container">
    <div class="timeline">
      <ul>
        <li data-aos="fade-right">
          <div className="timeline-content">
            <h3 className="date">February 21, 2005</h3>
            <h1>Born</h1>
          </div>
        </li>

        <li data-aos="fade-left">
          <div className="timeline-content">
            <h3 className="date">August 2017 - April 2023</h3>
            <h1>Letran de Dava Tagum (Highschool - Senior Highschool STEM)</h1>
            <p>Being a loyal student since Grade 7 to Grade 12 as a STEM student. The beginning of my enthusiasm for programming and web development.</p>
          </div>
        </li>
      
        <li data-aos="fade-right">
        <div className="timeline-content">
            <h3 className="date">August 2023 - Ongoing</h3>
            <h1>Saint Mary's College of Tagum Inc.</h1>
            <p>A first-year student pursuing my Bachelor of Science in Computer Science Degree. A fundamental step to becoming a successful web developer, software developer and software engineer.</p>
          </div>  
        </li>

        <li data-aos="fade-left">
          <div className="timeline-content">
            <h3 className="date">January 2024</h3>
            <h1>freeCodeCamp.org Certification</h1>
            <p>Certification for Responsive Web Design showing 300 hours of work done to this certificate.</p>
            <a target='_blank' href="https://www.freecodecamp.org/certification/Blitzz21/responsive-web-design">| Link |</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Timeline
