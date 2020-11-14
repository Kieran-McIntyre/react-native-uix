import sizes from "../../../values/sizes";
import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  container: {
    width: "100%",
    padding: sizes.spacing.md,
  },
  title: {
    marginBottom: sizes.spacing.sm,
  },
  section: {
    backgroundColor: theme.secondarySystemBackground,
    borderRadius: sizes.spacing.sm,
    overflow: "hidden",
  },
  emptyStateSection: {
    padding: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
