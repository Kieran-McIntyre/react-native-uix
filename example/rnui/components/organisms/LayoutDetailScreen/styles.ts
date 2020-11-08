import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.light.neutral,
  },

  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  actionsContainer: {
    marginTop: 20,
  },

  titleCaption: {
    marginBottom: 10,
  },

  metaContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
