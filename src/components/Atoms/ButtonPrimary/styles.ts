import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    buttonPrimary: {
        height: 44,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.light.neutral,
        borderRadius: 4,
        flex: 1,
        backgroundColor: "white",

        // shadow
        shadowColor: colors.light.neutralDark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },

    buttonPrimaryContent: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    buttonPrimaryLabel: {
        fontSize: 16,
        color: "#007afe",
        fontWeight: "500",
    },
});
