import React from "react";
import {
  Image,
  useColorModeValue,
  Flex,
  Heading,
  Link as Link2,
  Button,
  Box,
} from "@chakra-ui/react";
import { SiDeezer } from "react-icons/si";

const DataArtist = ({ dataArtist }) => {
  const color = useColorModeValue("gray.50", "gray.700");
  const { picture, name, link } = dataArtist;
  return (
    <Box >
      <Flex
        bg={color}
        w={{ lg: "300px" }}
        mr={{ lg: "1em" }}
        mb={{ base: "1em", lg: "0" }}
        boxShadow="lg"
        flexDirection={{ base: "row", lg: "column" }}
      >
        <Image
          src={picture}
          w={{ md: "inherit", lg: "100%" }}
          maxH={{ base: "180px", lg: "inherit" }}
        />
        <Box p=".5em" pb="1em">
          <Heading
            as="h2"
            textAlign={{ base: "left", lg: "center" }}
            fontSize="1.3em"
            marginY=".5em"
          >
            {name}
          </Heading>
          <Link2
            href={link}
            isExternal
            outline="none"
            display={{ lg: "block" }}
          >
            <Button
              colorScheme="purple"
              leftIcon={<SiDeezer />}
              w={{ lg: "100%" }}
            >
              View on deezer
            </Button>
          </Link2>
        </Box>
      </Flex>
    </Box>
  );
};

export default DataArtist;
