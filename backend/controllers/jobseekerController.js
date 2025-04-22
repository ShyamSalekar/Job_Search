const Application = require("../models/Application");
const SavedJob = require("../models/SavedJob");

// Save a job
const saveJob = async (req, res) => {
  try {
    const saved = await SavedJob.create({ job: req.body.jobId, user: req.user.id });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Could not save job" });
  }
};

// Apply to a job
const applyJob = async (req, res) => {
  try {
    const applied = await Application.create({
      job: req.body.jobId,
      applicant: req.user.id,
      resume: req.body.resume || "",
    });
    res.status(201).json(applied);
  } catch (err) {
    res.status(500).json({ message: "Application failed" });
  }
};

// Get saved jobs
const getSavedJobs = async (req, res) => {
  try {
    const saved = await SavedJob.find({ user: req.user.id }).populate("job");
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch saved jobs" });
  }
};

// Get applied jobs
const getAppliedJobs = async (req, res) => {
  try {
    const applied = await Application.find({ applicant: req.user.id }).populate("job");
    res.status(200).json(applied);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch applications" });
  }
};

module.exports = { saveJob, applyJob, getSavedJobs, getAppliedJobs };
