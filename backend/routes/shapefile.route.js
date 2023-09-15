const express = require("express");
const shapefileController = require("../controllers/shapefile.controller");

const _router = express.Router();

_router.post(
    "/api/map-data", 
    async (req, res) => await shapefileController.getShapefileData(req, res, "./data/India_boundary.shp")
);

module.exports = _router;
