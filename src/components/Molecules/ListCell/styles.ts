import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "column",
        backgroundColor: colors.light.neutralLightest,
    },
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: "flex-start",
    },
    content: {
        flex: 1,
    },
    separatorLine: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.light.neutral,
        flexShrink: 0,
    },
    label: {
        fontSize: 16,
        color: colors.light.neutralDark,
    },
    heading: {
        marginBottom: 2,
    },
    description: {
        marginTop: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    renderItemStartContent: {
        height: "100%",
        marginRight: 20,
    },
});
