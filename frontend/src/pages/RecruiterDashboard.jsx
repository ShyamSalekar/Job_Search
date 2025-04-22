import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import authHeader from "../utils/authHeader";
import MainLayout from "../components/MainLayout";

const RecruiterDashboard = () => {
  const [myJobs, setMyJobs] = useState([]);

  const fetchMyJobs = async () => {
    try {
      const res = await axios.get("/jobs/recruiter", {
        headers: authHeader(),
      });
      setMyJobs(res.data);
    } catch (err) {
      console.error("Error fetching your jobs", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/jobs/${id}`, {
        headers: authHeader(),
      });
      fetchMyJobs(); // refresh list
    } catch (err) {
      console.error("Error deleting job", err);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Posted Jobs</h1>
        <div className="space-y-4">
          {myJobs.length > 0 ? (
            myJobs.map((job) => (
              <div key={job._id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p>{job.description}</p>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="mt-2 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>You have not posted any jobs yet.</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default RecruiterDashboard;
