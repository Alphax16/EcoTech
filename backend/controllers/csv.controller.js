const csvModel = require("../models/csv.model");


const getCsvData = async (req, res, filePath) => {
    return  csvModel.getCsvData(filePath, (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.json(data);
            }
        })
};

module.exports = { getCsvData };
