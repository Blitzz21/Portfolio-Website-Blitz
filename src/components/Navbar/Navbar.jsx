import { useState } from 'react';
import React from 'react';
import './navbar.css';

const Links = () => {
  return (
  <div>

    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#footer'>Contacts</a></p>
  </div>  
  )
}

const Navbar = () => {
  return (
    <div className='Navbar'>
      
      <div className='navbar__logo-link'>
        <p><a href='#'>JF Marticio</a></p>
      </div>

      <div className='navbar__dropdown-menu'>
        <Links />
      </div>
      <div className='navbar__links-container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p><a href='#footer'>Contacts</a></p>
      </div> 
    </div>
  )
}

export default Navbar;
