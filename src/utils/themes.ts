import { registerThemes } from "react-native-themed-styles";
// import * as ThemedStyles from "react-native-themed-styles";
import { useColorScheme } from "react-native";

interface Theme {
  neutralLightest: string;
  neutralLight: string;
  neutral: string;
  neutralDark: string;
}

const light: Theme = {
  neutralLightest: "rgb(255, 255, 255)",
  neutralLight: "rgb(239, 239, 244)",
  neutral: "#E0E1E7",
  neutralDark: "#7E7E84",
};

const dark: Theme = {
  neutralLightest: "red",
  neutralLight: "pink",
  neutral: "yellow",
  neutralDark: "orange",
};

const styleSheetFactory: any = registerThemes({ light, dark }, (): any => {
  const colorScheme = useColorScheme();

  const isSchemeValid = !!colorScheme && ["light", "dark"].includes(colorScheme)

  if (!isSchemeValid) return 'light'

  return colorScheme
});

export { styleSheetFactory };
