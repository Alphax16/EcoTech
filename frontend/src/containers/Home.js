import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PollutionTypes from "../components/PollutionTypes";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <HeroSection />
      <PollutionTypes />
    </Box>
  );
};

export default Home;
