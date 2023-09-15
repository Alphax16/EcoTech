import { Box, Center, Flex, FormLabel, List, Text, UnorderedList, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";


function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Selected option state

  useEffect(() => {
    fetch("/quiz.json")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(shuffleArray(data));
      })
      .catch((error) => console.error("Error loading quiz data:", error));
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleAnswerSubmit = (selectedOption) => {
    const currentQuestion = questions[currentIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Quiz Completed! Your Score: ${score}/${questions.length}`);
    }
  };

  return (
    <Box bg="#12504B" h={"100vh"}>
      <Box pt={{ base: "15%", lg: "6%" }}>
        <Center display={"flex"} flexDir={"column"}>
          <Text fontSize={"3xl"} color={"#fff"}>
            ECO QUIZ
          </Text>
          {currentIndex < questions.length && (
            <Box borderRadius={"xl"} w={"70%"} my="10" bg={"green.100"} p={"3"}>
              <Text
                borderRadius={"xl"}
                textAlign={"center"}
                bg={"green.200"}
                fontSize={"xl"}
                p={"3"}
              >
                {questions[currentIndex].question}
              </Text>
              <UnorderedList>
                {questions[currentIndex].options.map((option, optionIndex) => (
                  <List
                    key={optionIndex}
                    textAlign={"center"}
                    fontSize={"xl"}
                    my={"3"}
                  >
                    <FormLabel
                      textAlign={"center"}
                      borderRadius={"xl"}
                      bg={"green.200"}
                      fontSize={"xl"}
                      py={"3"}
                    >
                      <input
                        style={{ margin: "10px" }}
                        type="radio"
                        required
                        name={`question_${currentIndex}`}
                        value={option}
                        onChange={() => setSelectedOption(option)} // Update selected option
                        checked={selectedOption === option} // Check the selected option
                      />
                      {option}
                    </FormLabel>
                  </List>
                ))}
              </UnorderedList>
              <Center flexDir={"column"}>
                {currentIndex >= questions.length - 1 ? (
                  <Button
                    bg={"green.500"}
                    border={"1px solid black"}
                    // onClick={() => setCurrentIndex(0)}
                  >
                    Restart Quiz
                  </Button>
                ) : (
                  <Button
                    bg={"green.100"}
                    border={"1px solid black"}
                    onClick={() => handleAnswerSubmit(selectedOption)}
                  >
                    Next
                  </Button>
                )}

                <Text my={"4"}>Score: {score}</Text>
              </Center>
            </Box>
          )}
        </Center>
      </Box>
    </Box>
  );
}

//     <Box bg="#12504B" h={"100vh"}>
//       <Box pt={{ base: "15%", lg: "6%" }}>
//         <Center display={"flex"} flexDir={"column"}>
//           <Text fontSize={"3xl"} color={"#fff"}>
//             ECO QUIZ
//           </Text>
//           <Text>Score: </Text>
//           <Box borderRadius={"xl"} w={"70%"} my="10" bg={"green.100"} p={"3"}>
//             <Text
//               borderRadius={"xl"}
//               textAlign={"center"}
//               bg={"green.200"}
//               fontSize={"xl"}
//               p={"3"}
//             >
//               Who is the prime minister of India
//             </Text>
//             <Text
//               borderRadius={"xl"}
//               textAlign={"center"}
//               bg={"green.200"}
//               fontSize={"xl"}
//               my={"3"}
//             >
//               Option 1
//             </Text>
//             <Text>Option 1</Text>
//             <Text>Option 1</Text>
//             <Text>Option 1</Text>
//           </Box>
//         </Center>
//       </Box>
//     </Box>
//   );
// };

export default Quiz;
