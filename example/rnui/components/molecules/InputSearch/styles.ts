import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  searchBarContainer: {
    flex: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchBar: {
    backgroundColor: theme.tertiarySystemBackground,
    height: 36,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  button: {
    marginLeft: 10,
  },
});
