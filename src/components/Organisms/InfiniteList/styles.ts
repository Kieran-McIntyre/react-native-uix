import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    infiniteList: {
        backgroundColor: "white",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.light.neutral,
    },

    loadingFooter: {
        minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
});
