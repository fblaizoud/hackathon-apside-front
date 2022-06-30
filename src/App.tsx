import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GraphCircle from './components/GraphCircle';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <GraphCircle />
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
