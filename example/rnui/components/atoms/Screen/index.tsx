import * as React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";
import { ScreenProps } from "./types"

const themedStyles = styleSheetFactory((theme: any) => ({
  screen: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.neutralLight,
  },
}));

export const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  const [styles]: any = useTheme(themedStyles);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

