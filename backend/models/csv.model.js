const fs = require('fs');
const csv = require('csv-parser');


function getCsvData(csvFilePath, cb) {
  const data = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    }).on('end', () => {
      cb(null, data);
    }).on('error', (err) => {
      cb(err, null);
    });
}

module.exports = { getCsvData };
