import { useContext, useMemo } from "react";
import { StyleSheet, useColorScheme, ColorSchemeName } from "react-native";
import { IThemeSchema } from "../interfaces/IThemeSchema";
import { ThemeContext, DEFAULT_THEMES } from "../theme";

type DynamicStyles = (theme: IThemeSchema) => StyleSheet.NamedStyles<any>;

interface Output {
  styles?: StyleSheet.NamedStyles<any>;
  colorScheme: ColorSchemeName;
  themeSet: IThemeSchema;
}

export const useStyle = (dynamicStyles?: DynamicStyles): Output => {
  const colorScheme = useColorScheme();
  const customThemeSet = useContext(ThemeContext);

  return useMemo(() => {
    const themeSet: IThemeSchema = DEFAULT_THEMES[colorScheme];

    const newStyle = {
      ...themeSet,
      ...customThemeSet[colorScheme],
    };

    if (!dynamicStyles) {
      return { themeSet: newStyle, colorScheme, styles: {} };
    }

    return {
      styles: StyleSheet.create(dynamicStyles(newStyle)),
      colorScheme,
      themeSet,
    };
  }, [colorScheme]);
};
