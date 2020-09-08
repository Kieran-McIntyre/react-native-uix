import { registerThemes } from "react-native-themed-styles";
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

const styleSheetFactory = registerThemes({ light, dark }, () => {
  return "light";
  //   const colorScheme = useColorScheme();
  //   return ["light", "dark"].includes(colorScheme) ? colorScheme : "light";
});

export { styleSheetFactory };
