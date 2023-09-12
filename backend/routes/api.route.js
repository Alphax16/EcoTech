const express = require("express");

const apicontroller = require("../controllers/api.controller");
const router = express.Router();

router.post(
  "/api/WaterPotabilityPredictor",
  apicontroller.WaterPotabilityPredictor
);

module.exports = router;
