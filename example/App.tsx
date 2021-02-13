import React from "react";
import AppNavigation from "./navigation";
import { ThemeProvider, ITheme } from "react-native-ios-ui";

const App: React.FC = () => {
  const theme: ITheme = {
    light: {
      tint: "#2188ff",
    },
    dark: {
      tint: "#388bfd",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
