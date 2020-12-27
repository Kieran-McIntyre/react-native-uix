import { useContext, useMemo } from "react";
import { StyleSheet, useColorScheme, ColorSchemeName } from "react-native";
import { IThemeSchema } from "../interfaces/IThemeSchema";
import { ThemeContext, DEFAULT_THEMES } from "../theme";

export type DynamicStyles = (
  theme: IThemeSchema
) => StyleSheet.NamedStyles<any>;

export interface StyleOutput {
  styles: StyleSheet.NamedStyles<any>;
  colorScheme: ColorSchemeName;
  themeSet: IThemeSchema;
}

export const useStyle = (dynamicStyles?: DynamicStyles): StyleOutput => {
  const colorScheme = useColorScheme() ?? "light";
  const customThemeSet = useContext(ThemeContext);

  return useMemo(() => {
    const themeSet: IThemeSchema = DEFAULT_THEMES[colorScheme];

    const newThemeSet = {
      ...themeSet,
      ...customThemeSet[colorScheme],
    };

    return {
      colorScheme,
      themeSet: newThemeSet,
      styles: getDynamicStyle(newThemeSet, dynamicStyles),
    };
  }, [colorScheme]);
};

const getDynamicStyle = (
  newThemeSet: IThemeSchema,
  dynamicStyles?: DynamicStyles
) => {
  if (!dynamicStyles) {
    return StyleSheet.create({});
  }

  return StyleSheet.create(dynamicStyles(newThemeSet));
};
