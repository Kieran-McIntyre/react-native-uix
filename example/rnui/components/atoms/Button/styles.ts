import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  button: {
    color: theme.tint,
    fontSize: 17,
  },

  submit: {
    fontWeight: "500",
  },

  disabled: {
    opacity: 0.5,
  },
});
