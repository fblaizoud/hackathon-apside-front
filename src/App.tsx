import './App.scss';
import TodaySchedule from './components/todaySchedule';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <TodaySchedule />
      {/* <Router>
        <Routes> */}
      {/* <Route path="*" element={<Home />} /> */}
      {/* </Routes>
      </Router> */}
    </div>
  );
}

export default App;
