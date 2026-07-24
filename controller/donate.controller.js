const Donation = require("../model/donate.model");

// CREATE NEW DONATION RECORD
exports.create = async (req, res) => {
  try {
    const { name, email, amount, frequency } = req.body;

    if (!name || !email || !amount) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const donation = await Donation.create({
        name,
        email,
        amount,
        frequency,
    });
    res.status(201).json({
        success:true,
        donation
    })
  } catch (error) {
    console.log("Error creating donation:", error.message)
    res.status(500).json({
        success:false,
        message: error.message,
    })
  }
};


// GET ALL DONATIONNS
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    console.log("Error fetching donations:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};