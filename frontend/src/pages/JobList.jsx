import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 drop-shadow-md">
        🌈 Explore Colorful Job Opportunities!
      </h1>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={job._id}
              className={`p-6 rounded-2xl shadow-lg transform-gpu transition-all duration-300 hover:-translate-y-1 border-l-8 ${
                index % 3 === 0
                  ? "border-pink-500 bg-pink-100/60"
                  : index % 3 === 1
                  ? "border-purple-500 bg-purple-100/60"
                  : "border-blue-500 bg-blue-100/60"
              } backdrop-blur-md`}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-3">{job.description}</p>
              <p className="text-sm text-gray-600">
                📍 <span className="font-semibold text-indigo-700">{job.location}</span>
              </p>
              {/* <div className="mt-4">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full shadow hover:from-indigo-600 hover:to-purple-600 transition duration-200">
                  Apply Now 🚀
                </button>
              </div> */}
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-800 col-span-full">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
