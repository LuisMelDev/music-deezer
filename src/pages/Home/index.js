import React, { useContext } from "react";
import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaItunesNote } from "react-icons/fa";
import Spinner from "components/Spinner";
import ListOfSongs from "components/ListOfSongs";
import { useGetTrendsSongs } from "hooks/useGetTrendsSongs";
import Error from "components/Error";
import {TrendsContext} from "context/trendsContext/context";

const Home = () => {

  const {trends, setTrends} = useContext(TrendsContext)

  const { error } = useGetTrendsSongs({trends, setTrends});

  if (!trends && !error) return <Spinner />;
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
        <Icon as={FaItunesNote} color="#7928CA" /> Musical trends{" "}
        <Icon as={FaItunesNote} color="#FF0080" />
      </Heading>
      <Box paddingX="1rem">
          <ListOfSongs songs={trends} />
      </Box>
    </>
  );
};

export default Home;
