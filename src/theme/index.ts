import * as React from "react";
import { IThemeSchema } from "../interfaces/IThemeSchema";

export const DEFAULT_THEMES: {
  light: IThemeSchema;
  dark: IThemeSchema;
} = {
  light: {
    textPrimary: "black",
    textSecondary: "#7E7E84",
    textTertiary: "red", // placeholder
    textQuarternary: "pink", // disabled

    tint: "#007afe",

    systemBackground: "rgb(239, 239, 244)",
    secondarySystemBackground: "rgb(255, 255, 255)",
    tertiarySystemBackground: "#E0E1E7",
    separator: "#E0E1E7",

    blue: "#007afe",
    green: "#34c759",
    indigo: "#5856d5",
    orange: "#ff9500",
    pink: "#ff2d55",
    purple: "#af52de",
    red: "#ff3c2f",
    teal: "#5ac8fa",
    yellow: "#ffcc00",
    white: "#ffffff",
  },

  dark: {
    textPrimary: "rgb(255, 255, 255)",
    textSecondary: "#7E7E84",
    textTertiary: "#D3D3DB", // placeholder
    textQuarternary: "pink", // disabled

    tint: "#0c84ff",

    systemBackground: "black",
    secondarySystemBackground: "rgb(28, 28, 30)",
    tertiarySystemBackground: "rgb(44, 44, 46)",
    separator: "#545458",

    blue: "#0c84ff",
    green: "#30d158",
    indigo: "#5f5ce6",
    orange: "#ff9e0a",
    pink: "#ff385f",
    purple: "#bf5bf1",
    red: "#fe4539",
    teal: "#64d1fe",
    yellow: "#fed707",
    white: "#ffffff",
  },
};

export const THEME_CONTEXT_DEFAULT_VALUE = {
  light: {},
  dark: {},
};

export const ThemeContext = React.createContext(THEME_CONTEXT_DEFAULT_VALUE);
