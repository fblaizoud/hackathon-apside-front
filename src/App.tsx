import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NavbarLeft from './components/NavbarLeft';
import NavbarTop from './components/NavbarTop';
import Messaging from './components/Messaging';
import ProjectTheme from './components/ProjectTheme';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <div className="App__content">
          <NavbarLeft />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/projectTheme" element={<ProjectTheme />} />
            <Route path="/messaging" element={<Messaging />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
