import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    header: {
        height: 56,
        paddingHorizontal: 20,
    },

    headerDefault: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.light.neutralDark,
    },

    content: {
        flex: 1,
    },

    contentForm: {
        backgroundColor: colors.light.neutralLight,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },

    headerSection: {
        flex: 1,
    },

    headerSectionStart: {
        alignItems: "flex-start",
    },

    headerSectionCenter: {
        alignItems: "center",
    },

    headerSectionEnd: {
        alignItems: "flex-end",
    },
});
