import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "column",
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    separatorLine: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.light.neutral,
        flexShrink: 0,
        marginLeft: 64,
    },
    label: {
        fontSize: 16,
        marginLeft: 12,
    },
    count: {
        color: colors.light.neutralDark,
        fontSize: 16,
        marginRight: 5,
    },
});
