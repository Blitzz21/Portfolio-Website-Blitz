import React from 'react';
import './greetings.css';

const Greetings = () => {
  return (
  <div className='Greetings'>
    <div className='p-container'>
      <p className='Greetings__first-p'>Hi, I'm John Floyd Marticio</p>
      <p className='Greetings__second-p'>I'm a, Freelance Web Developer.</p>
    </div>

    <div className='Greetings__contact-button'
      ><button type="button">Contact Me</button>
    </div>
  </div>
  )
}

export default Greetings;