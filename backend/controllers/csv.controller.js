const csvModel = require("../models/csv.model");


const getCsvData = (req, res) => {
  csvModel.getCsvData("./data/Chernobyl_Chemical_Radiation.csv", (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(data);
    }
  });
};

module.exports = { getCsvData };
