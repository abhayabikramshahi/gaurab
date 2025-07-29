import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Sample components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GaurabPackages from './pages/GaurabPackages';
import GaurabAi from './pages/Gaurab-Ai';
import Navbar from './components/Navbar';
import PasswordChecker from './pages/Password';
import Html from './pages/Html';
import Css from './pages/Css';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gaurab-packages" element={<GaurabPackages />} />
        <Route path="/gaurab-ai" element={<GaurabAi />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/html-generator" element={<Html />} />
        <Route path="/css-generator" element={<Css />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
