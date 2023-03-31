import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main "`, lg: `"nav nav" "main aside"` }}
    >
      <GridItem area={"nav"} bgColor={"coral"}>
        Nav
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
