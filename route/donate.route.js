const express = require("express");

const router = express.Router();

const { create, getAllDonations } = require("../controller/donate.controller");

router.post("/create", create);
router.get("/getdonation", getAllDonations);

module.exports = router;