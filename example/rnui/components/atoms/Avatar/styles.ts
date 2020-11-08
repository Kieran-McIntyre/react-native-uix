import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },

    avatarImage: {
        resizeMode: "cover",
    },

    avatarInitals: {
        alignItems: "center",
        justifyContent: "center",
    },

    avatarInitalsText: {
        color: "white",
    },
});
