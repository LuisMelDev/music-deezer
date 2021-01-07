import React, {useContext} from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { musicContext } from "context/musicToPlay/contex";

const ButtonPlayPreview = ({song}) => {
  const { setSong } = useContext(musicContext);

  const handleSetSongToPlay = () => {
    setSong(song)
  }

  return (
    <Tooltip label="Play preview">
      <IconButton
        colorScheme="blue"
        icon={<FaPlay />}
        isRound={true}
        size="md"
        mr="2"
        onClick={handleSetSongToPlay}
      />
    </Tooltip>
  );
};

export default ButtonPlayPreview;
