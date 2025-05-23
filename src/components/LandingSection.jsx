import React, { useState } from "react";
import { Avatar, Heading, Stack, VStack, Icon, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { motion } from "framer-motion";
import AvatarPic from "../images/Avatar.jpeg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiGit,
  DiDocker,
  DiLinux,
  DiMongodb,
  DiRedis,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiNestjs,
  SiFlutter,
  SiSocketdotio,
  SiPostman,
  SiPwa,
} from "react-icons/si";

// Motion components
const MotionStack = motion(Stack);
const MotionAvatar = motion(Avatar);
const MotionHeading = motion(Heading);
const MotionIconWrapper = motion.div;

const greeting = "Hello, I'm Iman!";
const bio1 = "MERN Stack Developer, Flutter Developer, Linux SysAdmin";

const techIcons = [
  { icon: DiHtml5, label: "HTML" },
  { icon: DiCss3, label: "CSS" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: SiNestjs, label: "Nest.js" },
  { icon: DiMongodb, label: "MERN Stack" },
  { icon: SiPwa, label: "PWA" },
  { icon: SiSocketdotio, label: "Socket.io" },
  { icon: SiPostman, label: "REST API" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: DiLinux, label: "Linux" },
  { icon: DiDocker, label: "Docker" },
  { icon: DiGit, label: "Git" },
];

const wordTypingVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const LandingSection = () => {
  const [greetingWords] = useState(greeting.split(" "));
  const [bioWords] = useState(bio1.split(", "));

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      bgGradient="linear(to-r, #2A4365, #1A365D, #2A4365)"
      backgroundSize="200% 200%"
      animation="gradient 15s ease infinite"
      px={[4, 6, 8]}
      css={{
        "@keyframes gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <MotionStack
        spacing={8}
        direction={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionAvatar
          src={AvatarPic}
          size={["lg", "xl", "2xl"]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ cursor: "pointer" }}
          border="px solid"
          borderColor="whiteAlpha.300"
          boxShadow="0 0 10px rgba(255, 255, 255, 0.3)"
          _hover={{
            borderColor: "whiteAlpha.600",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          }}
          p={1}
          bg="transparent"
        />
        <VStack spacing={4} align="center">
          <MotionHeading
            as="h1"
            fontSize={["2xl", "3xl", "4xl"]}
            color="white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {greetingWords.map((word, index) => (
              <MotionHeading
                key={index}
                as="span"
                custom={index}
                variants={wordTypingVariants}
                initial="hidden"
                animate="visible"
                style={{
                  marginRight:
                    index < greetingWords.length - 1 ? "0.5rem" : "0",
                }}
              >
                {word}
              </MotionHeading>
            ))}
          </MotionHeading>
          <MotionHeading
            as="h2"
            fontSize={["md", "lg", "xl"]}
            color="whiteAlpha.800"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {bioWords.map((word, index) => (
              <MotionHeading
                key={index}
                as="span"
                custom={index}
                variants={wordTypingVariants}
                initial="hidden"
                animate="visible"
                style={{
                  marginRight: index < bioWords.length - 1 ? "0.5rem" : "0",
                }}
              >
                {word}
                {index < bioWords.length - 1 && ", "}
              </MotionHeading>
            ))}
          </MotionHeading>
          <HStack spacing={[2, 4, 6]} mt={4} wrap="wrap" justify="center">
            {techIcons.map((tech, index) => (
              <MotionIconWrapper
                key={tech.label}
                initial={{ scale: 1, color: "rgba(255, 255, 255, 0.6)" }}
                whileHover={{
                  scale: 1.2,
                  color: [
                    "#FFD700",
                    "#61DBFB",
                    "#000000",
                    "#68A063",
                    "#E0234E",
                    "#00ED64",
                    "#02569B",
                    "#FCC624",
                    "#2496ED",
                    "#F05032",
                    "#E34F26",
                    "#1572B6",
                    "#DC382D",
                    "#010101",
                    "#FF6200",
                    "#41C7C7",
                  ][index % 16],
                }}
                transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
                style={{ cursor: "pointer" }}
              >
                <Icon as={tech.icon} boxSize={8} title={tech.label} />
              </MotionIconWrapper>
            ))}
          </HStack>
        </VStack>
      </MotionStack>
    </FullScreenSection>
  );
};

export default LandingSection;
