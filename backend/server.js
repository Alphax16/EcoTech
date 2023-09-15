const express = require("express");
const cors = require("cors");
const _apiRouter = require("./routes/api.route");
const _csvRouter = require("./routes/csv.route")
const _shpRouter = require("./routes/shapefile.route")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(_apiRouter);
app.use(_csvRouter);
app.use(_shpRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Hi from Server side 👋!!`);
})

app.listen(port, () => {
  console.log(`Server running at port '${port}'...`);
});
