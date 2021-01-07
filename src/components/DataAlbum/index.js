import React from "react";
import {
  Text,
  Image,
  useColorModeValue,
  Flex,
  Heading,
  Link as Link2,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link } from "wouter";
import { SiDeezer } from "react-icons/si";

const DataAlbum = ({ dataAlbum }) => {
  const color = useColorModeValue("gray.50", "gray.700");
  const { img, link, genres, title, artist } = dataAlbum;
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
          src={img}
          w={{ md: "inherit", lg: "100%" }}
          maxH={{ base: "180px", lg: "inherit" }}
        />
        <Box p=".5em" pb="1em">
          <Heading
            as="h2"
            textAlign={{ base: "left", lg: "center" }}
            fontSize="1.2em"
            mb=".3rem"
          >
            {title}
          </Heading>
          <Text mb=".3rem">
            Artist:{" "}
            <Link href={`/artist/${artist.id}`}>
              <Link2>
                <Text as="strong">{artist.name}</Text>
              </Link2>
            </Link>
          </Text>
          <Text mb=".5rem">
            Genre: <Text as="strong">{genres}</Text>
          </Text>
          <Link2
            href={link}
            isExternal
            outline="none"
            display={{ lg: "block" }}
          >
            <Button
              colorScheme="red"
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

export default DataAlbum;
