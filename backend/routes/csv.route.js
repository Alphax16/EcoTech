const express = require("express");
const csvController = require("../controllers/csv.controller");

const _router = express.Router();

_router.post(
    "/api/radiation", 
    async (req, res) => await csvController.getCsvData(req, res, "./data/Chernobyl_Chemical_Radiation.csv")
);

_router.post(
    "/api/tree-cover", 
    async (req, res) => await csvController.getCsvData(req, res, "./data/Forest Coverage (1987-2013).csv")
);

module.exports = _router;
