import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.textPrimary,
  },
});
