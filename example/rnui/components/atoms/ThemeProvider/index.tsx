import * as React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { ThemeContext } from "../../../theme";

const DEFAULT_THEME = {
  light: {},
  dark: {},
};

const getNavigationTheme = (scheme, theme) => {
  const navigationTheme = scheme === "dark" ? DarkTheme : DefaultTheme;

  if (theme?.[scheme]?.tint) {
    navigationTheme.colors.primary = theme[scheme].tint;
  }

  return navigationTheme;
};

export const ThemeProvider = ({ children, theme = DEFAULT_THEME }) => {
  const scheme = useColorScheme();
  const navigationTheme = getNavigationTheme(scheme, theme);

  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer theme={navigationTheme}>
        {children}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
