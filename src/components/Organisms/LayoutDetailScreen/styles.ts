import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  container: {
    backgroundColor: theme.secondarySystemBackground,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.separator,
  },

  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  actionsContainer: {
    marginTop: 20,
  },

  titleCaption: {
    marginBottom: 10,
  },

  metaContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
