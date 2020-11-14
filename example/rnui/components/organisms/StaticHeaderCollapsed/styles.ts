import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  blendedHeader: {
    backgroundColor: theme.neutralLightest,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: theme.neutral,
    paddingTop: 10,
  },
  headerExtras: {
    backgroundColor: theme.neutralLightest,
    paddingVertical: 5,
  },
  inputSearch: {
    paddingBottom: 10,
  },
  segmentedControlWithSearch: {
    marginTop: 15,
  },
  neutralLightest: {
    backgroundColor: theme.neutralLightest,
  },
});
