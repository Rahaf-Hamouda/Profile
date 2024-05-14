//import { useState } from 'react'
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';

function App() {
  
  return (
      <>
          <Navbar />
          <Intro />
          <Skills />
          <Works />
          <Contact />
          
    </>
  )
}

export default App;
