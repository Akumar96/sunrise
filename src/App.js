import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js'; // Import the Header component
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Navbar from './components/navbar/Navbar.js';

/* external css */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* <Header /> Include the Header component */}
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
