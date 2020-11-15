import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  layoutDetailSection: {
    marginTop: 20,
  },

  layoutDetailSectionTitle: {
    textTransform: "uppercase",
    marginBottom: 6,
    marginTop: 10,
    marginLeft: 20,
    fontSize: 12,
    letterSpacing: 0.5,
  },

  layoutDetailSectionContent: {
    backgroundColor: theme.secondarySystemBackground,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.separator,
    borderTopColor: theme.separator,
    padding: 20,
  },
})