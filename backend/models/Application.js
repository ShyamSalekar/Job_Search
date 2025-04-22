const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resume: { type: String }, // Optional: file URL or link
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
