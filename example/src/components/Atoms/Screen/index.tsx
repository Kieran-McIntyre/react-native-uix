import * as React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";

const themedStyles = styleSheetFactory(theme => ({
  screen: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.neutralLight,
  },
}));

const Screen = ({ children, style }: { children?: any; style?: any }) => {
  const [styles] = useTheme(themedStyles);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;
