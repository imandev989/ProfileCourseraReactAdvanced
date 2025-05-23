import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" py={4}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text fontSize="sm">
            Iman • © 2025 • Made with{" "}
            <FontAwesomeIcon icon={faHeart} color="#FF6B6B" /> •{" "}
            <Link
              href="https://github.com"
              color="yellow.400"
              _hover={{ color: "yellow.300" }}
              isExternal
            >
              GitHub
            </Link>
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;