const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://knowthyself-2007.netlify.app", // <-- your Netlify site URL here!
  })
);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mbtiDB";

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");

    // Routes
    const mbtiRoutes = require("./mbtiRoutes");
    app.use("/mbti", mbtiRoutes);

    // Test route
    app.get("/", (req, res) => res.send("Server is up! 🚀"));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

startServer();







