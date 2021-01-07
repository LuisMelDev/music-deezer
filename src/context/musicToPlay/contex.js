import { createContext, useState } from "react";

export const musicContext = createContext();

const MusicState = (props) => {
  const [song, setSong] = useState("");

  return (
    <musicContext.Provider value={{ song, setSong }}>
      {props.children}
    </musicContext.Provider>
  );
};

export default MusicState;
