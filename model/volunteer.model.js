const mongoose = require("mongoose") ;

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    interest: {
      type: String,
      enum: [
        "Education",
        "Healthcare",
        "Event Coordination",
        "Community Outreach",
      ],
      default: "Education",
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "onboarded"],
      default: "pending",
    },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

module.exports = mongoose.model("Volunteer", volunteerSchema);

