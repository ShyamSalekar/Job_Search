const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Routes
const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

const jobseekerRoutes = require("./routes/jobseekerRoutes");
app.use("/api/jobseeker", jobseekerRoutes);

// app.use("/api/users", require("./routes/authRoutes"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
