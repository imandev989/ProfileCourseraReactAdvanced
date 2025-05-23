import React, { createContext, useContext, useState } from "react";
import { Alert, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const onOpen = (type, message) => {
    setState({ isOpen: true, type, message });
    setTimeout(() => {
      setState({ isOpen: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ onOpen }}>
      {state.isOpen && (
        <MotionBox
          position="fixed"
          top={16}
          right={16}
          zIndex={10}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <Alert status={state.type} borderRadius="lg" boxShadow="lg" bg={state.type === "success" ? "green.500" : "red.500"} color="white">
            <Box>
              <AlertTitle>{state.type === "success" ? "All good!" : "Oops!"}</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Box>
          </Alert>
        </MotionBox>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);