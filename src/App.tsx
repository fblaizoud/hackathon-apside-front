import './App.scss';

import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import RecentProjects from './components/RecentProjects';

function App() {
  return (
    <div className="App">
      <RecentProjects />
      {/* <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
