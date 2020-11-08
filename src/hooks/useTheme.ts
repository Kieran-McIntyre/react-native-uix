import { StyleSheet, useColorScheme, ColorSchemeName } from "react-native";
import { IThemeSchema } from "../interfaces/IThemeSchema";

type DynamicStyles = (theme: IThemeSchema) => StyleSheet.NamedStyles<any>;

const themes = {
    light: {
        neutralLight: "red",
        neutral: "blue",
        neutralLightest: "green",
    },

    dark: {
        neutralLight: "red",
        neutral: "black",
        neutralLightest: "black",
    },
};

export const useTheme = (
    dynamicStyles: DynamicStyles
): [StyleSheet.NamedStyles<any>, ColorSchemeName] => {
    const colorScheme = useColorScheme() ?? "light"
    const themeSet: IThemeSchema = themes[colorScheme];

    return [dynamicStyles(themeSet), colorScheme];
};
