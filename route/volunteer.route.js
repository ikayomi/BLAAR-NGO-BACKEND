const express = require("express");

const router = express.Router();

const { register, getAllVolunteers } = require("../controller/volunteer.controller");

router.post("/register", register);
router.get("/getall", getAllVolunteers);

module.exports = router;