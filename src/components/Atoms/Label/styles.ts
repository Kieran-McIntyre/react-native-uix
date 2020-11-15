import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  primary: {
    color: theme.textPrimary,
  },
  secondary: {
    color: theme.textSecondary,
  },
  xl: {
    fontSize: 34,
  },
  lg: {
    fontSize: 28,
  },
  md: {
    fontSize: 22,
  },
  sm: {
    fontSize: 16,
  },
  semibold: {
    fontWeight: "500",
  },
  bold: {
    fontWeight: "bold",
  },
  lighter: {
    fontWeight: "300",
  },
});
