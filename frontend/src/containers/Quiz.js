import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

const Quiz = () => {
  return (
    <Box bg="#12504B" h={"100vh"}>
      <Box pt={{ base: "15%", lg: "6%" }}>
        <Center display={"flex"} flexDir={"column"}>
          <Text fontSize={"3xl"} color={"#fff"}>
            ECO QUIZ
          </Text>
          <Text>Score: </Text>
          <Box borderRadius={"xl"} w={"70%"} my="10" bg={"green.100"} p={"3"}>
            <Text
              borderRadius={"xl"}
              textAlign={"center"}
              bg={"green.200"}
              fontSize={"xl"}
              p={"3"}
            >
              Who is the prime minister of India
            </Text>
            <Text
              borderRadius={"xl"}
              textAlign={"center"}
              bg={"green.200"}
              fontSize={"xl"}
              my={"3"}
            >
              Option 1
            </Text>
            <Text>Option 1</Text>
            <Text>Option 1</Text>
            <Text>Option 1</Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Quiz;
