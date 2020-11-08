import * as React from "react";
import { Animated } from "react-native";
import { AnimatedHeaderTitleProps } from "./types"
import { styles } from "./styles"

export const AnimatedHeaderTitle: React.FC<AnimatedHeaderTitleProps> = ({ title, style }) => {
  return <Animated.Text style={[styles.title, style]}>{title}</Animated.Text>;
};
