import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const Container = ({ data, setData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect to update isLoading based on data changes
  useEffect(() => {
    setIsLoading(data.length === 0); // Set isLoading to true if data is empty
  }, [data]);

  const handleDetails = (item) => {
    navigate("/eventDetails", { state: { item: item } });
  };

  return (
    <Box p={8}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                className="shadow-lg"
              >
                <Skeleton height="200px" borderRadius="md" mb={4} />
                <SkeletonText noOfLines={4} spacing="4" />
              </Box>
            ))
          : data.slice(0, 8).map((item, index) => (
              <MotionBox
                key={index}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
                textAlign="center"
                style={{ maxWidth: "100%" }}
                position="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                pb={12} // Add padding to the bottom to ensure button does not overlap
              >
                <Image
                  src={item.imageUrl[0]}
                  alt={item.title}
                  borderRadius="md"
                  mb={4}
                  w="100%"
                />
                <Box textAlign="left">
                  <Heading as="h2" size="md" mb={2}>
                    {item.title}
                  </Heading>
                  <Text mb={4}>{item.description}</Text>
                  <Text fontSize="lg" fontWeight="bold" mb={4}>
                    Starting ticket with: ₹{item.Price}
                  </Text>
                </Box>
                <Button
                  bg="#FEAEA3"
                  color="white"
                  _hover={{ bg: "#A0522D" }}
                  position="absolute"
                  bottom={4}
                  left="50%"
                  transform="translateX(-50%)"
                  width="calc(100% - 16px)" 
                  margin="0 8px"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </Button>
              </MotionBox>
            ))}
      </Grid>
    </Box>
  );
};

export default Container;
