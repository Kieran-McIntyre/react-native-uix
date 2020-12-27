import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  container: {
    flex: 1,
  },

  buttonPrimary: {
    height: 44,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.tertiarySystemBackground,
    borderRadius: 4,
    flex: 1,
    backgroundColor: theme.secondarySystemBackground,

    // shadow
    shadowColor: theme.separator,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },

  buttonPrimaryContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  buttonPrimaryLabel: {
    fontSize: 16,
    color: theme.tint,
    fontWeight: "500",
  },
});
