import React from "react";
import { Provider as StoreProvider } from "react-redux";

import store from "./redux";
import AppNavigation from "./navigation";
import { ThemeProvider } from "./rnui";
import { IThemeSchema } from "./rnui/interfaces/IThemeSchema";

function App() {
  const theme = {
    light: {
      tint: "blue",
    },
    dark: {
      tint: "green",
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
