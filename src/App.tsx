import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeesPage from './components/EmployeesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="*" element={<EmployeesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
