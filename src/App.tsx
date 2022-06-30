import './App.scss';
import TodaySchedule from './components/todaySchedule';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

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
