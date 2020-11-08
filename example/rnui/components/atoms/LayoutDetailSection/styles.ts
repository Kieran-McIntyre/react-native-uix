import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    layoutDetailSection: {
        marginTop: 20,
    },

    layoutDetailSectionTitle: {
        textTransform: "uppercase",
        marginBottom: 6,
        marginTop: 10,
        marginLeft: 20,
        color: colors.light.neutralDark,
        fontSize: 12,
        letterSpacing: 0.5,
    },

    layoutDetailSectionContent: {
        backgroundColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.light.neutral,
        padding: 20,
    },
});
