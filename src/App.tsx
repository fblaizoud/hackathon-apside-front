import './App.scss';

import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
