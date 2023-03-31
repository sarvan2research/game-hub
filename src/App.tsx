import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main "`, lg: `"nav nav" "main aside"` }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area={"main"} bgColor={"gold"}>
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bgColor={"blue"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
