import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200 flex justify-between">
      <div className="font-bold text-xl">Job Portal</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/post-job">Post Job</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;



