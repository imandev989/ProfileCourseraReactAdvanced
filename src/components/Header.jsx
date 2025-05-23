import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, useBreakpointValue } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto: hello@example.com" },
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (headerRef.current) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Handle responsive layout
  const socialSpacing = useBreakpointValue({ base: 4, md: 6 }); // Adjust spacing for different breakpoints
  const navSpacing = useBreakpointValue({ base: 4, md: 8 }); // Adjust spacing for navigation items

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      bg="rgba(24, 24, 27, 0.8)"
      backdropFilter="blur(10px)"
      boxShadow="md"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }} // Adjust padding for different breakpoints
          py={4}
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap" // Make sure items wrap on smaller screens
        >
          <nav>
            <HStack spacing={socialSpacing}>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition="all 0.3s"
                  _hover={{ transform: "scale(1.2)", color: "yellow.400" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={navSpacing} wrap="wrap">
              <Link
                href="/#projects"
                onClick={handleClick("projects")}
                fontWeight="medium"
                transition="all 0.3s"
                _hover={{ color: "yellow.400" }}
              >
                Projects
              </Link>
              <Link
                href="/#contact-me"
                onClick={handleClick("contactme")}
                fontWeight="medium"
                transition="all 0.3s"
                _hover={{ color: "yellow.400" }}
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
