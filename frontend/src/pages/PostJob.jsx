import React, { useState } from "react";
import axios from "../axiosConfig";
import authHeader from "../utils/authHeader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "../components/MainLayout";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    salary: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", formData, {
        headers: authHeader(),
      });
      toast.success("Job posted successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to post job");
    }
  };

  return (
    <MainLayout>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="title" onChange={handleChange} placeholder="Job Title" />
          <input name="company" onChange={handleChange} placeholder="Company" />
          <input
            name="location"
            onChange={handleChange}
            placeholder="Location"
          />
          <input name="salary" onChange={handleChange} placeholder="Salary" />
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Job Description"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Post Job
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default PostJob;
