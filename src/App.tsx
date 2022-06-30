import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecentProjects from './components/RecentProjects';
import GraphChart from './components/GraphChart';
import GraphCircle from './components/GraphCircle';
import Navbar from './components/Navbar';
import ProjectCards from './components/ProjectCards';
import TodaySchedule from './components/todaySchedule';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="*" element={<TodaySchedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
