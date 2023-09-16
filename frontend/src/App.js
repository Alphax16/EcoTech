import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Quiz from "./containers/Quiz";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ForestMap from "./containers/ForestMap";
import WaterPotabilityPredictor from "./containers/WaterPotabilityPredictor";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/forest-map" element={<ForestMap />} />
        <Route
          path="/model/WaterPotabilityPredictor"
          element={<WaterPotabilityPredictor />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
