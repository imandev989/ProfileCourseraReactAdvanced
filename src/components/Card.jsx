import React from "react";
import { Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Card = ({ title, description, imageSrc }) => {
  return (
    <MotionBox
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      bg="white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: 2,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      _hover={{
        cursor: "pointer", // Changes cursor to hand on hover
      }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" height="200px" width="100%" />
      <Box p={4} height="200px">
        <VStack align="start" spacing={3}>
          <Heading as="h3" size="md" color="gray.800">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {description}
          </Text>
          <HStack>
            <Text color="blue.500" fontWeight="bold">
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="blue.500" />
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default Card;