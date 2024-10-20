import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Login from './components/auth/login/Login';
import Navbar from './components/common/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navbar />} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App