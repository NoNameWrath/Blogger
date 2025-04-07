import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="bg-white min-h-screen bg-backgroundImage">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />     
        <Route path="/register" element={<Register />} />
         </Routes>
    </div>
  );
}

export default App;
