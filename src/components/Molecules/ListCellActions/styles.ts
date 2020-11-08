import { StyleSheet } from "react-native"
import colors from "../../../values/colors";
import sizes from "../../../values/sizes";

export const styles = StyleSheet.create({
    label: {
        color: colors.light.neutralLightest,
        fontWeight: "500",
    },
    icon: {
        marginBottom: 10,
    },
    actionContainer: {
        alignItems: "center",
        backgroundColor: colors.light.neutralLightest,
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
