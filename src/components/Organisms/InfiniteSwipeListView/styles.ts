import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  infiniteList: {
    backgroundColor: theme.secondarySystemBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.separator,
  },

  loadingFooter: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.secondarySystemBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.separator,
  },
});
