import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  blendedHeader: {
    paddingHorizontal: 20,
  },

  headerSticky: {
    backgroundColor: theme.systemBackground,
    borderBottomWidth: 1,
    paddingTop: 10,
  },

  inputSearch: {
    paddingBottom: 10,
  },

  segmentedControlWithSearch: {
    marginBottom: 10,
  },
});
