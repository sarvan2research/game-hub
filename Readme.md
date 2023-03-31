# Game Hub

## Instal Chakra UI

Use this link to install chakar ui to react appilcation
https://chakra-ui.com/getting-started/vite-guide

Use documentation to build chakra ui components with minimal

Import Images as object instead point to location.
import logo from "../assets/logo.webp";

Reduce size of logo
<Image src={logo} boxSize="60px"></Image>

Orienetation of components in horizontal stack we can use HSTACK component

 <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Nav Bar</Text>
    </HStack>
## Setup Theme
Theme in chakra is stored local storage of intial values
Its two way step , create a theme constant and apply in root component so that screen mode can be changed

````import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:'dark'
}

const theme =extendTheme({config});```

Adding theme with intial valus in main.tsx
```<ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />```

### Use of Abort Controller
Article explains about  abortcontroller to make exitisng request server to abort and create new one.
https://medium.datadriveninvestor.com/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
````

Extracting useEffect to hook module to make seperation principle.
