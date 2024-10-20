import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
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
          <Route path="/cloud-aws/" element={<HomePage />} />
          <Route path="/cloud-aws/login" element={<Login />} />
          <Route path="/cloud-aws/*" element={<Navbar />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App