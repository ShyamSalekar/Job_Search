import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './pages/JobList';
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import RecruiterDashboard from './pages/RecruiterDashboard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/dashboard" element={<RecruiterDashboard />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;