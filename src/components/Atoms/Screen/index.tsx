import * as React from "react";
import { SafeAreaView } from "react-native";
import { ScreenProps } from "./types";
import { useStyle } from "../../../hooks/useStyle";
import { dynamicStyles } from "./styles";

export const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  const { styles } = useStyle(dynamicStyles);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};
