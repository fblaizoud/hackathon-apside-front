import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecentProjects from './components/RecentProjects';
import GraphChart from './components/GraphChart';
import GraphCircle from './components/GraphCircle';
import NavbarTop from './components/NavbarTop';
import ProjectCards from './components/ProjectCards';
import TodaySchedule from './components/TodaySchedule';
import NavbarLeft from './components/NavbarLeft';
import EmployeesPage from './components/EmployeesPage';

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
