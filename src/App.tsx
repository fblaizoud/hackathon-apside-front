import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NavbarLeft from './components/NavbarLeft';
import EmployeesPage from './components/EmployeesPage';
import NavbarTop from './components/NavbarTop';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <div className="App__content">
        <NavbarLeft />
        <Router>
          <Routes>
            <Route path="*" element={<EmployeesPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
