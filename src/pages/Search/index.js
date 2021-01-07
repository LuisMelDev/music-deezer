import React from "react";
import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Spinner from "components/Spinner";
import ListOfSongs from "components/ListOfSongs";
import Error from "components/Error";
import { useGetSearch } from "hooks/useGetSearch";

const Search = ({ params }) => {
    
  const query = decodeURI(params.q);
  const { error, data, isLoading } = useGetSearch({ query });

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <>
      <Heading
        as="h2"
        textAlign="center"
        paddingTop="1rem"
        bgGradient="linear(to-b, #7928CA,#FF0080)"
        bgClip="text"
        fontFamily="Montserrat"
        fontWeight="400"
        textShadow="1px 1px 5px rgba(0,0,0,0.2)"
      >
        <Icon as={FaSearch} color="#7928CA" /> Your search
      </Heading>
      <Box paddingX="1rem">
          <ListOfSongs songs={data} />
        </Box>
    </>
  );
};

export default Search;
