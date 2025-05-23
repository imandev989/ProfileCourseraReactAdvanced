import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionInput = motion(Input);
const MotionSelect = motion(Select);
const MotionTextarea = motion(Textarea);

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit(values.firstName, values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(
        response.type,
        response.type === "success"
          ? `Thanks for your submission ${formik.values.firstName}, we will get back to you shortly!`
          : "Something went wrong, please try again later!"
      );
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#4B3F72"
      py={16}
      spacing={8}
    >
      <VStack
        w="80vw"
        p={{ base: 4, md: 8 }}
        justifyContent="center"
        alignItems="center"
        // backgroundColor="red"
      >
        <Heading
          as="h1"
          id="contactme-section"
          color="white"
          textAlign="center"
          mb={8}
          fontSize={{ base: "2xl", md: "4xl" }}
          textShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
        >
          Contact Me
        </Heading>
        <MotionBox
          p={{ base: 4, md: 8 }}
          rounded="2xl"
          w="100%"
          maxW="900px" // Increased max width for larger screens
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(10px)"
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
          border="1px solid rgba(255, 255, 255, 0.18)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName" color="whiteAlpha.900">
                  Name
                </FormLabel>
                <MotionInput
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  bg="whiteAlpha.200"
                  border="none"
                  borderRadius="xl"
                  placeholder="Enter your name"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _focus={{
                    bg: "whiteAlpha.300",
                    boxShadow: "0 0 0 2px #4169E1",
                  }}
                  transition="all 0.3s"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ scale: 1.02 }}
                  fontSize={{ base: "sm", md: "md" }} // Responsive font size
                />
                <FormErrorMessage color="red.300">
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email" color="whiteAlpha.900">
                  Email Address
                </FormLabel>
                <MotionInput
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  bg="whiteAlpha.200"
                  border="none"
                  borderRadius="xl"
                  placeholder="Enter your email"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _focus={{
                    bg: "whiteAlpha.300",
                    boxShadow: "0 0 0 2px #4169E1",
                  }}
                  transition="all 0.3s"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ scale: 1.02 }}
                  fontSize={{ base: "sm", md: "md" }} // Responsive font size
                />
                <FormErrorMessage color="red.300">
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type" color="whiteAlpha.900">
                  Type of Enquiry
                </FormLabel>
                <MotionSelect
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  bg="whiteAlpha.200"
                  border="none"
                  borderRadius="xl"
                  _focus={{
                    bg: "whiteAlpha.300",
                    boxShadow: "0 0 0 2px #4169E1",
                  }}
                  transition="all 0.3s"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ scale: 1.02 }}
                  fontSize={{ base: "sm", md: "md" }} // Responsive font size
                >
                  <option
                    value="hireMe"
                    style={{ background: "#4B3F72", color: "white" }}
                  >
                    Freelance project proposal
                  </option>
                  <option
                    value="openSource"
                    style={{ background: "#4B3F72", color: "white" }}
                  >
                    Open source consultancy session
                  </option>
                  <option
                    value="other"
                    style={{ background: "#4B3F72", color: "white" }}
                  >
                    Other
                  </option>
                </MotionSelect>
                <FormErrorMessage color="red.300">
                  {formik.errors.type}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment" color="whiteAlpha.900">
                  Your Message
                </FormLabel>
                <MotionTextarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  bg="whiteAlpha.200"
                  border="none"
                  borderRadius="xl"
                  placeholder="Write your message here"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _focus={{
                    bg: "whiteAlpha.300",
                    boxShadow: "0 0 0 2px #4169E1",
                  }}
                  transition="all 0.3s"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ scale: 1.02 }}
                  fontSize={{ base: "sm", md: "md" }} // Responsive font size
                />
                <FormErrorMessage color="red.300">
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>

              <MotionButton
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isLoading}
                whileHover={{
                  scale: 1.05,
                  bgGradient: "linear(to-r, #27408B, #4169E1)",
                }}
                whileTap={{ scale: 0.98 }}
                bgGradient="linear(to-r, #4169E1, #27408B)"
                color="white"
                fontWeight="bold"
                borderRadius="xl"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
                _hover={{ boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)" }}
                transition="all 0.3s"
                fontSize={{ base: "md", md: "lg" }} // Responsive button font size
              >
                Submit
              </MotionButton>
            </VStack>
          </form>
        </MotionBox>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
