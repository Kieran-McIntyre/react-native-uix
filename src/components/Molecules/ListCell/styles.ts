import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  touchableWrapper: {
    backgroundColor: theme.secondarySystemBackground,
  },
  tableRow: {
    flexDirection: "column",
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "flex-start",
  },
  content: {
    flex: 1,
  },
  separatorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.separator,
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    color: theme.textSecondary,
  },
  heading: {
    marginBottom: 2,
    color: theme.textSecondary,
  },
  description: {
    marginTop: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.textPrimary,
  },
  renderItemStartContent: {
    height: "100%",
    marginRight: 20,
  },
});
