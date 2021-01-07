import React, {useContext} from "react";
import  { musicContext } from "context/musicToPlay/contex";
import { usePlaySong } from "hooks/usePlaySong";
import { Box } from "@chakra-ui/react";

const PlayMusic = () => {
  const { song } = useContext(musicContext);
  const music = usePlaySong({ track: song }); // eslint-disable-line
  return <Box display="none" ></Box>;
};

export default PlayMusic;
