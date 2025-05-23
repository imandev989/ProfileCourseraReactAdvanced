import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event Planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={[4, 6, 8]} // Responsive padding
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        as="h1"
        id="projects-section"
        fontSize={["2xl", "3xl", "4xl"]}
        color="white"
        mb={8}
        textAlign={["center", "left"]}
        width="100%"
      >
        Featured Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
