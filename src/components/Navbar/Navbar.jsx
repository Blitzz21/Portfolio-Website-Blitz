import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className='Navbar'>
        <div className='Navbar__logo-link'>
          <a href='#me'>JF Marticio</a>
        </div>

        <div className='Navbar__menu'>
          <ul className={this.state.clicked ? 'navbar active' : 'navbar'}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contacts'>Contacts</a></li>
          </ul>
        </div>

        <div className='mobile' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}> </i>
        </div>
      </div>
    );
  }
}

export default Navbar;
