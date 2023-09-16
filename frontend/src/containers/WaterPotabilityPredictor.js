import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const WaterPotabilityPredictor = () => {
  const [ph, setPh] = useState();
  const [Hardness, setHardness] = useState();
  const [Solids, setSolids] = useState();
  const [Chloramines, setChloramines] = useState();
  const [Organic_carbon, setOrganic_carbon] = useState();

  const [Trihalomethanes, setTrihalomethanes] = useState();
  const [Turbidity, setTurbidity] = useState();
  const [Sulfate, setSulfate] = useState();
  const [Conductivity, setConductivity] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "  http://localhost:5000/api/WaterPotabilityPredictor",
        {
          ph,
          Hardness,
          Solids,
          Chloramines,
          Organic_carbon,

          Trihalomethanes,
          Turbidity,
          Sulfate,
          Conductivity,
        }
      );
      console.log(response.data);
      alert(response.data);
    } catch (err) {
      console.error("Error fetching tree data:", err);
    }
  };

  return (
    <Box bg={"#12504B"} py={"16"}>
      <form style={{ width: "40%", color: "#fff" }} onSubmit={handlesubmit}>
        <Input
          type="text"
          placeholder="ph"
          onChange={(e) => setPh(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Hardness"
          onChange={(e) => setHardness(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Solids"
          onChange={(e) => setSolids(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Chloramines"
          onChange={(e) => setChloramines(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Sulfate"
          onChange={(e) => setSulfate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Conductivity"
          onChange={(e) => setConductivity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Organic Carbon"
          onChange={(e) => setOrganic_carbon(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Trihalomethanes"
          onChange={(e) => setTrihalomethanes(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Turbidity"
          onChange={(e) => setTurbidity(e.target.value)}
        />
        <Button type="submit">Get Predictions</Button>
      </form>
    </Box>
  );
};

export default WaterPotabilityPredictor;
