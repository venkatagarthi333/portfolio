// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Import the single stylesheet

function App() {
  // Check for saved theme in localStorage, default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // On theme change, update body class and save to localStorage
  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      {/* Pass theme and toggle function to Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
