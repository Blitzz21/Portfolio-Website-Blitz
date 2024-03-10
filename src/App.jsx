import React from 'react';
import './App.css';

import { Navbar, Greetings, About, Projects, CTA, Footer } from './components';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Greetings />
        <About />
        <CTA />
        <Projects />
        <Footer />
    </div>
  )
}

export default App;
