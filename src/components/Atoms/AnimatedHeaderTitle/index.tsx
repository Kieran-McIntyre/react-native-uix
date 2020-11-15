import * as React from "react";
import { Animated } from "react-native";
import { AnimatedHeaderTitleProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const AnimatedHeaderTitle: React.FC<AnimatedHeaderTitleProps> = ({
  title,
  style,
}) => {
  const { styles } = useStyle(dynamicStyles);

  return <Animated.Text style={[styles.title, style]}>{title}</Animated.Text>;
};
