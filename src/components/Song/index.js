import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "wouter";
import ButtonPlayPreview from "components/ButtonPlayPreview";
import ButtonPlayOnDeezer from "components/ButtonPlayOnDeezer";


const Song = ({ song, artist = true }) => {
  
  const color = useColorModeValue("gray.50", "gray.700");
  return (
    <Box paddingRight=".5rem" boxShadow="lg" bg={color} overflow="hidden">
      <Flex justify="space-between">
        <Image h="140px" src={song.album.img} alt={song.album.title} />
        <Flex
          flex="1"
          paddingLeft={{ base: "1em", lg: ".5em" }}
          paddingTop=".5em"
          h="1fr"
          flexDirection="column"
        >
          <Box>
            <Heading
              as="h3"
              fontSize="1.1rem"
              fontWeight="400"
              mb="1"
              isTruncated
            >
              {song.title}
            </Heading>
            <Text as="span" fontSize=".8em" isTruncated>
              <strong>Album: </strong>
              <Link href={`/album/${song.album.id}`}>{song.album.title}</Link>
            </Text>
            <br />
            {artist && (
              <Text as="span" fontSize=".8em" isTruncated>
                <strong>Author:</strong>{" "}
                <Link href={`/artist/${song.artist.id}`}>
                  {song.artist.name}
                </Link>
              </Text>
            )}
          </Box>
          <Box display="flex" gap="2" alignItems="center" flex="1" mb="1">
            <ButtonPlayPreview song={song.preview} />
            <ButtonPlayOnDeezer link={song.link} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(Song);
