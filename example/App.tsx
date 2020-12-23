import React from "react";
import { Provider as StoreProvider } from "react-redux";

import store from "./redux";
import AppNavigation from "./navigation";
import { ThemeProvider } from "react-native-ios-ui";

function App() {
  const theme: any = {
    light: {
      tint: "blue",
    },
    dark: {
      tint: "pink",
    },
  };

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
