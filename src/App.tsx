import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GraphChart from './components/GraphChart';
import Navbar from './components/Navbar';
import TodaySchedule from './components/TodaySchedule';

function App() {
  return (
    <div className="App">
      <GraphChart />
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
