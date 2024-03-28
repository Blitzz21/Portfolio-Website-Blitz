import React, { Component } from 'react';
import './navbar.css';

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'flex'
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'none'
  }


class Navbar extends Component {

  const = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true })
    }, []); }
  
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <div className='Navbar'>
        <nav data-aos="fade-down">

          <ul className='sidebar'>
            <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill='#efefef' height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contacts">Contacts</a></li>
          </ul>

          <ul className='navbar'>
            <li><a href="https://github.com/Blitzz21">JF Marticio</a></li>
            <li className='hideOnMobile'><a href="#Home">Home</a></li>
            <li className='hideOnMobile'><a href="#About">About</a></li>
            <li className='hideOnMobile'><a href="#Projects">Projects</a></li>
            <li className='hideOnMobile'><a href="#Contacts">Contacts</a></li>
            <li className='menu-button' onClick={showSidebar} ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill='#efefef' height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
