import React from "react";
import { Tooltip, IconButton, Link } from "@chakra-ui/react";
import { SiDeezer } from "react-icons/si";

const ButtonPlayOnDeezer = ({ link }) => {
  return (
    <Tooltip label="Play on deezer">
      <Link href={link} isExternal>
        <IconButton
          colorScheme="purple"
          icon={<SiDeezer />}
          size="md"
          mr="2"
          fontSize="20px"
        />
      </Link>
    </Tooltip>
  );
};

export default ButtonPlayOnDeezer;
