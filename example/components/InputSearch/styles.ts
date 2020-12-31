import { StyleSheet } from "react-native";
import { IThemeSchema } from "react-native-ios-ui";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  searchBarContainer: {
    flex: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  clearIcon: {
    position: "absolute",
    right: 10,
  },

  searchBar: {
    backgroundColor: theme.tertiarySystemBackground,
    height: 36,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "relative",
  },

  button: {
    marginLeft: 10,
  },

  buttonContainer: {
    position: "absolute",
  },

  input: {
    paddingRight: 40,
  },
});
