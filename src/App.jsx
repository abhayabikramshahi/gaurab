import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GaurabPackages from './pages/GaurabPackages';
import GaurabAi from './pages/Gaurab-Ai';
import PasswordChecker from './pages/Password';
import Html from './pages/Html';
import Css from './pages/Css';
import PageNotFound from './pages/PageNotFound';

import './App.css';

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
