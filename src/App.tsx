import './App.scss';

import React from 'react';

// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
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
