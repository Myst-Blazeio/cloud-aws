import React from 'react'
import './App.css'
import {
  HashRouter as Router,
  Route, Routes
} from "react-router-dom";
import Login from './components/auth/login/Login';
import Navbar from './components/common/Navbar/Navbar';
import HomePage from './components/test/Homepage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navbar />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App