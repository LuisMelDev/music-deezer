import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Spinner from "components/Spinner";
import Error from "components/Error";
import { useGetAlbumData } from "hooks/useGetAlbumData";
import { Redirect } from "wouter";
import DataAlbum from "components/DataAlbum";
import SongAlbum from "components/SongAlbum";

const Album = ({ params }) => {
  const { id } = params;

  const { dataAlbum, error, isLoading } = useGetAlbumData({ id });

  if (isLoading) return <Spinner />;
  if (error) {
    if (error.code === 800) return <Redirect to="/404" />;
    return <Error error={error} />;
  }

  return (
    <Flex
      px=".5em"
      pt=".5em"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <DataAlbum dataAlbum={dataAlbum.data} />
      <Box flex={{ lg: "1" }} >
        {dataAlbum.tracks.map(track => <SongAlbum key={track.id} song={track} />)}
      </Box>
    </Flex>
  );
};

export default Album;
