const express = require("express");
const {
  saveJob,
  applyJob,
  getSavedJobs,
  getAppliedJobs,
} = require("../controllers/jobseekerController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// All routes protected
router.post("/save", protect, saveJob);
router.post("/apply", protect, applyJob);
router.get("/saved", protect, getSavedJobs);
router.get("/applied", protect, getAppliedJobs);

module.exports = router;
