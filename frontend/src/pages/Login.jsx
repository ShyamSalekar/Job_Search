import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../components/MainLayout";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      // alert("Login Success");
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      // alert("Login failed! Please check your credentials");
      toast.error("Login failed");
    }
  };

  return (
    <MainLayout>

    <div className="max-w-md mx-auto mt-10 p-5 border rounded-xl shadow-md">
      <h2 className=" text-2xl font-bold mb-5 text-center">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
    </MainLayout>

  );
};

export default Login;
