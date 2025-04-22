import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../components/MainLayout";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker", // or recruiter
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      // alert("Registered successfully. Now login.");
      toast.success("Registered successfully. Now Login");
      navigate("/login");
    } catch (err) {
      // alert("Registration failed");
      toast.error("Registration failed");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10 p-5 border rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            type="email"
            required
          />
          <input
            className="border p-2 rounded"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            type="password"
            required
          />

          <select
            name="role"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="jobseeker">Jobseeker</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Register
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
