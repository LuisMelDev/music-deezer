import React from "react";
import { Flex, Text, Box, Spacer, useColorModeValue } from "@chakra-ui/react";
import ButtonPlayPreview from "components/ButtonPlayPreview";
import ButtonPlayOnDeezer from "components/ButtonPlayOnDeezer";

const SongAlbum = ({ song }) => {
    const color = useColorModeValue("gray.50", "gray.700");
  return (
    <Flex boxShadow="md" mb=".5rem" alignItems="center" p="1em" bg={color} >
      <Text as="span">{song.title}</Text>
      <Spacer />
      <Box>
        <ButtonPlayPreview song={song.preview} />
        <ButtonPlayOnDeezer link={song.link} />
      </Box>
    </Flex>
  );
};

export default React.memo(SongAlbum);
