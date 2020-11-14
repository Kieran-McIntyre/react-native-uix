import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  blendedHeader: {
    backgroundColor: theme.neutralLight,
    paddingHorizontal: 20,
  },
  headerExtras: {
    backgroundColor: theme.neutralLight,
    paddingVertical: 10,
  },
  inputSearch: {
    paddingBottom: 10,
  },
  segmentedControlWithSearch: {
    marginTop: 15,
  },
  neutralLight: {
    backgroundColor: theme.neutralLight,
  },
});
