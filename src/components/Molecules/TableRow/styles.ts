import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  tableRow: {
    flexDirection: "column",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  separatorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.separator,
    flexShrink: 0,
    marginLeft: 64,
  },
  label: {
    fontSize: 16,
    marginLeft: 12,
  },
  count: {
    fontSize: 16,
    marginRight: 5,
  },
});
