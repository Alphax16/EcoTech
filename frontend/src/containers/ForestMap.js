import "leaflet/dist/leaflet.css"; // Add this line to import Leaflet CSS
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";
import {
  Box,
  Text,
  VStack,
  ChakraProvider,
  extendTheme,
  theme,
} from "@chakra-ui/react";

const ForestMap = () => {
  const [shapefileData, setShapefileData] = useState(null);
  const [treeData, setTreeData] = useState(null);

  const mapStyle = {
    // color: 'green',
    weight: 1.5,
    fillColor: "lightgreen",
    fillOpacity: 0.7,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/map-data");
        console.log(response.data);
        setShapefileData(response.data);
      } catch (err) {
        console.error("Error fetching shapefile data:", err);
      }
    };
    const statewisetree = async () => {
      try {
        const response = await axios.post(
          "  http://localhost:5000/api/tree-cover"
        );
        console.log(response.data);
        setTreeData(response.data);
      } catch (err) {
        console.error("Error fetching tree data:", err);
      }
    };

    fetchData();
    statewisetree();
  }, []);

  useEffect(() => {
    if (treeData !== null) {
      const stateNames = treeData.map((stateData) => stateData["State/UTs"]);
      console.log(stateNames, "here");
    }
  }, [treeData]);

  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      w="100vw"
      spacing={4}
      bg="#12504B"
      py={"16"}
    >
      <Text fontSize="3xl" color="#fff">
        Forest Map
      </Text>
      <Box w="90%" my="10" bg="green.100" p="3" borderRadius="xl">
        <Text
          textAlign="center"
          bg="green.200"
          fontSize="xl"
          p="3"
          borderRadius="xl"
        >
          Percentage of Forest Coverage
        </Text>
        <Box w="100%" h="500px">
          <MapContainer
            attributionControl={false}
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
            className="map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {shapefileData && <GeoJSON data={shapefileData} style={mapStyle} />}
          </MapContainer>
        </Box>
      </Box>
    </VStack>
  );
};

export default ForestMap;
