const express = require("express");
const {
  postJob,
  getAllJobs,
  getRecruiterJobs,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const { protect, isRecruiter } = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/", getAllJobs);

// Protected
router.post("/", protect, isRecruiter, postJob);
router.get("/recruiter", protect, isRecruiter, getRecruiterJobs);
router.put("/:id", protect, isRecruiter, updateJob);
router.delete("/:id", protect, isRecruiter, deleteJob);

module.exports = router;
