import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import { useRef } from "react";
  import { motion } from "framer-motion";
  
  const MotionAlertDialogContent = motion(AlertDialogContent);
  
  function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success";
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <MotionAlertDialogContent
            py={4}
            backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
            borderRadius="lg"
            boxShadow="lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccess ? "All good!" : "Oops!"}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
          </MotionAlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  
  export default Alert;