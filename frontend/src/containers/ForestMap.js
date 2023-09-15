import 'leaflet/dist/leaflet.css'; // Add this line to import Leaflet CSS
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';
import { Box, Text, VStack, ChakraProvider, extendTheme, theme } from "@chakra-ui/react";


const customTheme = extendTheme({
  ...theme,
});

const ForestMap = () => {
  const [shapefileData, setShapefileData] = useState(null);

  const mapStyle = {
    // color: 'green',
    weight: 1.5,
    fillColor: 'lightgreen',
    fillOpacity: 0.7,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:5000/api/map-data");
        setShapefileData(response.data);
      } catch (err) {
        console.error('Error fetching shapefile data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <VStack
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        w="100vw"
        spacing={4}
        bg="#12504B"
      >
        <Text fontSize="3xl" color="#fff">Forest Map</Text>
        <Box w="70%" my="10" bg="green.100" p="3" borderRadius="xl">
          <Text textAlign="center" bg="green.200" fontSize="xl" p="3" borderRadius="xl">Percentage of Forest Coverage</Text>
          <Box w="100%" h="500px">
            <MapContainer
              attributionControl={false}
              center={[20.5937, 78.9629]}
              zoom={5}
              style={{ height: '100%', width: '100%' }}
              className="map"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              { shapefileData && (<GeoJSON data={shapefileData} style={mapStyle} />) }
            </MapContainer>
          </Box>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default ForestMap;
