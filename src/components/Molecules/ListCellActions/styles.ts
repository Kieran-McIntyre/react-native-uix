import sizes from "../../../values/sizes";
import { IThemeSchema } from "../../../interfaces/IThemeSchema";
import { StyleSheet } from "react-native";

export const dynamicStyles = (
  theme: IThemeSchema
): StyleSheet.NamedStyles<any> => ({
  label: {
    color: theme.white,
    fontWeight: "500",
  },

  icon: {
    marginBottom: 10,
  },

  actionContainer: {
    alignItems: "center",
    backgroundColor: theme.secondarySystemBackground,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },

  action: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: sizes.listCellActionWidth,
  },
});
