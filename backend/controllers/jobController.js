const Job = require("../models/Job");

// POST /api/jobs
const postJob = async (req, res) => {
  const { title, company, location, description } = req.body;

  try {
    const newJob = await Job.create({
      title,
      company,
      location,
      description,
      postedBy: req.user.id,
    });

    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: "Job posting failed" });
  }
};

// GET /api/jobs
const getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find().populate("postedBy", "name email");
      res.status(200).json(jobs);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  };

  // Get jobs posted by logged-in recruiter
  const getRecruiterJobs = async (req, res) => {
    try {
      const jobs = await Job.find({ postedBy: req.user.id });
      res.status(200).json(jobs);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch recruiter jobs" });
    }
  };
  
  // Update a job
  const updateJob = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
  
      if (!job) return res.status(404).json({ message: "Job not found" });
      if (job.postedBy.toString() !== req.user.id)
        return res.status(403).json({ message: "Not your job to update" });
  
      const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
  
      res.status(200).json(updatedJob);
    } catch (err) {
      res.status(500).json({ message: "Update failed" });
    }
  };
  
  // Delete a job
  const deleteJob = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
  
      if (!job) return res.status(404).json({ message: "Job not found" });
      if (job.postedBy.toString() !== req.user.id)
        return res.status(403).json({ message: "Not your job to delete" });
  
      await job.remove();
      res.status(200).json({ message: "Job deleted" });
    } catch (err) {
      res.status(500).json({ message: "Delete failed" });
    }
  };
  
  module.exports = {
    postJob,
    getAllJobs,
    getRecruiterJobs,
    updateJob,
    deleteJob,
  };