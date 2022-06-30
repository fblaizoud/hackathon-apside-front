import './App.scss';
import TodaySchedule from './components/todaySchedule';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import GraphCircle from './components/GraphCircle';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <GraphCircle />
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
