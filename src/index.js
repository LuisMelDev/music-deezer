import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
