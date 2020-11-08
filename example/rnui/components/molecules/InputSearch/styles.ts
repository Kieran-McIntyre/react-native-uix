import { StyleSheet } from "react-native";
import colors from "../../../values/colors";

export const styles = StyleSheet.create({
    searchBarContainer: {
        flex: 1,
    },

    searchIcon: {
        marginRight: 10,
    },

    searchBar: {
        backgroundColor: colors.light.neutral,
        height: 36,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
});
