const Volunteer = require("../model/volunteer.model");

// Volunteer Register
exports.register = async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "name and email are required.",
      });
    }

    const volunteer = await Volunteer.create({
      name,
      email,
      phone,
      interest,
      message,
    });
    res.status(201).json({
      succes: true,
      message: "Registration Successful",
      volunteer,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// List of all volunteer applied
exports.getAllVolunteers = async (req,res) =>{
    try {
        const volunteers = await Volunteer.find().sort({
            createdAt: -1
        });
        res.status(201).json({
            sucess:true,
            volunteers
        })
    } catch (error) {
        console.log("Error Fetching volunteers")
        res.status(500).json({
            sucess:false,
            message: error.message,
        })
    }
}