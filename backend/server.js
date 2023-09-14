require("dotenv").config();
const express = require("express");
const cors = require("cors");
const _router = require("./routes/api.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(_router);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Hi from Server side 👋!!`);
})

app.listen(port, () => {
  console.log(`Server running at port '${port}'...`);
});
