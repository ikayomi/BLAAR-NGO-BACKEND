const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const donateRoutes = require("./route/donate.route.js");
const volunteerRoutes = require("./route/volunteer.route.js")


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blaar NGO Backend is running 🚀",
  });
});

app.use("/api/donate", donateRoutes);
app.use("/api/volunteers", volunteerRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Successfully Connected to MongoDB  ");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log( "❌MongoDB connection error:", err);
  });












