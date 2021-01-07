import React from "react";
import {
  Flex,
  Modal,
  Spinner,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

const Spin = () => {
  return (
    <Modal isOpen={true} size="xs" isCentered>
      <ModalOverlay bg="rgba(255,255,255,0.2)" />
      <ModalContent
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        boxShadow="0"
      >
        <Spinner size="xl" color="red.500"/>
      </ModalContent>
    </Modal>
  );
};

export default Spin;
