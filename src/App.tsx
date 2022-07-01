import './App.scss';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NavbarLeft from './components/NavbarLeft';
import EmployeesPage from './components/EmployeesPage';
import NavbarTop from './components/NavbarTop';
import Messaging from './components/Messaging';
import ProjectTheme from './components/ProjectTheme';
import Login from './components/Login';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavbarTop isLogged={isLogged} />
        <div className="App__content">
          <NavbarLeft />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/projectTheme" element={<ProjectTheme />} />
            <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/employees" element={<EmployeesPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
