const express = require("express");
const csvController = require("../controllers/csv.controller");

const _router = express.Router();

_router.post(
    "/csv_data", 
    csvController.getCsvData
);

module.exports = _router;
