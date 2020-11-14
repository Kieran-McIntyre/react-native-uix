import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  screen: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.systemBackground,
  },
});
