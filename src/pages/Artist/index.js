import React from "react";
import { Grid, Flex } from "@chakra-ui/react";
import Spinner from "components/Spinner";
import Error from "components/Error";
import { Redirect } from "wouter";
import { useGetArtistData } from "hooks/useGetArtistData";
import DataArtist from "components/DataArtist";
import Song from "components/Song";

const Artist = ({ params }) => {
  const { id } = params;

  const { error, data, isLoading } = useGetArtistData({ id });

    if (isLoading) return <Spinner />;
    if (error) {
      if (error.code === 800) return <Redirect to="/404" />;
      return <Error error={error} />;
    }


  return (
    <Flex px=".5em" pt=".5em" flexDirection={{ base: "column", lg: "row" }}>
      <DataArtist dataArtist={data.dataArtist}/>
      <Grid flex={{ lg: "1" }} templateColumns="1fr" gap="2">
          {data.tracks.map(track => (
              <Song key={track.id} song={track} artist={false} />
          ))}
      </Grid>
    </Flex>
  );
};

export default Artist;
