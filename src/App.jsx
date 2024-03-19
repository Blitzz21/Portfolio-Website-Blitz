import React from 'react';
import './App.css';

import { Navbar, Greetings, About, Timeline, Projects, Footer } from './components';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Greetings />
        <About />
        <Timeline />
        <Projects />
        <Footer />
    </div>
  )
}

export default App;
