import React from "react";
import { Box, Flex, Link as Link2, useColorModeValue } from "@chakra-ui/react";
import ColorSwither from "components/ColorSwitcher";
import SearchForm from "components/SearchForm";
import { Link } from "wouter";

const Header = () => {
  const navBg = useColorModeValue("gray.50", "gray.900");
  const navBorder = useColorModeValue("gray.200", "gray.700");
  return (
    <Box
      as="header"
      bg={navBg}
      w="100%"
      p="3"
      borderBottom="1px"
      borderColor={navBorder}
    >
      <Flex as="nav">
        <Flex w="150px" alignItems="center">
          <Link href="/">
            <Link2
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontSize={{ base: "1.2em", md: "1.3em" }}
              as="span"
              _hover=""
            >
              Deezer Music
            </Link2>
          </Link>
        </Flex>
        <Flex flex="1" justify="flex-end">
          <SearchForm />
          <ColorSwither />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
