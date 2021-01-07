import { Route, Switch } from "wouter";
import { Box } from "@chakra-ui/react";
import Header from "components/Header";
import Home from "pages/Home";
import Footer from "components/Footer";
import Album from "pages/Album";
import Artist from "pages/Artist";
import TrendsState from "context/trendsContext/context";
import NotFoundError from "pages/404";
import Search from "pages/Search";
import MusicState from "context/musicToPlay/contex";
import PlayMusic from "components/PlayMusic";

function App() {
  return (
    <MusicState>
      <TrendsState>
        <Header />
        <Box as="main" paddingY="1" w="100%" flex="1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/album/:id" component={Album} />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/search/:q" component={Search} />
            <Route path="/404" component={NotFoundError} />
            <Route path="/:rest*" component={NotFoundError} />
          </Switch>
        </Box>
        <Footer />
        <PlayMusic />
      </TrendsState>
    </MusicState>
  );
}

export default App;
