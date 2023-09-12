const WaterPotabilityPredictor = async (req, res) => {
  const {
    ph,
    Hardness,
    Solids,
    Chloramines,
    Sulfate,
    Conductivity,
    Organic_carbon,
    Trihalomethanes,
    Turbidity,
  } = req.body;
  try {
    const pyprocess = spawn("py3", [
      "models/WaterPotabilityPredictor.py",
      ph,
      Hardness,
      Solids,
      Chloramines,
      Sulfate,
      Conductivity,
      Organic_carbon,
      Trihalomethanes,
      Turbidity,
    ]);
  } catch (ex) {
    console.log(ex);
  }

  pyprocess.stdout.on("data", (data) => {
    console.log(data.toString());

    result = data.toString();
  });
  pyprocess.on("close", () => {
    res.json(result);
  });

  pyprocess.stderr.on("data", (data) => {
    let json = JSON.stringify(data);
    let bufferOriginal = Buffer.from(JSON.parse(json).data);

    console.log(bufferOriginal.toString("utf8"));

    console.error(data);
    console.log(json);
  });
};

module.exports = {
  WaterPotabilityPredictor,
};
