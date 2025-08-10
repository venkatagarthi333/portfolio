// src/components/Navbar.jsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">PORTFOLIO   </a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item"><a href="#about" className="nav-link" >About</a></li>
        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
        <li className="nav-item"><a href="#works" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        <li className="nav-item">
          <button onClick={toggleTheme} className="theme-toggle-button">
          {
            theme === 'light' ? 
            (<FaMoon className="theme-icon" />
                ) : (
            <FaSun className="theme-icon" />)
          } 
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
