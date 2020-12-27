import * as React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme, ColorSchemeName } from "react-native";
import { ThemeContext } from "../../../theme";
import { ITheme } from "../../../interfaces/IThemeSchema";
import { ThemeProviderProps } from "./types";

const DEFAULT_THEME: any = {
  light: {},
  dark: {},
};

const getNavigationTheme = (scheme: ColorSchemeName, theme: ITheme) => {
  const navigationTheme = scheme === "dark" ? DarkTheme : DefaultTheme;

  if (scheme && theme?.[scheme]?.tint) {
    navigationTheme.colors.primary = theme[scheme].tint;
  }

  return navigationTheme;
};

export const ThemeProvider = ({
  children,
  theme = DEFAULT_THEME,
}: ThemeProviderProps) => {
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
