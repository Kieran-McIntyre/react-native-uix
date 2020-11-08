import { StyleSheet } from "react-native"
import sizes from "../../../values/sizes";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: sizes.spacing.md,
    },
    title: {
        marginBottom: sizes.spacing.sm,
    },
    section: {
        backgroundColor: "white",
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
